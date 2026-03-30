import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import webpush, {
	type WebPushError,
	type PushSubscription as WebPushSubscription,
} from "web-push";
import { events, posts } from "@/lib/data";

interface DbPushSubscription {
	subscription: WebPushSubscription;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
	process.env.SUPABASE_SERVICE_ROLE_KEY ||
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
	"";

const supabase = createClient(supabaseUrl, supabaseKey);

webpush.setVapidDetails(
	process.env.VAPID_SUBJECT || "mailto:iletisim@ankaralindyhop.org",
	process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "",
	process.env.VAPID_PRIVATE_KEY || "",
);

export async function GET() {
	try {
		if (
			!process.env.VAPID_PRIVATE_KEY ||
			!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ||
			!supabaseUrl
		) {
			return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
		}

		// 1. Daha önce bildirim atılmış içeriklerin ID'lerini çekiyoruz.
		const { data: sentItems, error } = await supabase
			.from("sent_notifications")
			.select("item_id");

		// Eğer tablo yoksa (hata verirse) boş farz etmeyelim ki spam atmasın. Sadece tablo kurulmuşsa devam edelim.
		if (error) {
			console.error(
				"Tablo hatası, muhtemelen sent_notifications kurulmadı:",
				error,
			);
			return NextResponse.json({ error: "Table missing" }, { status: 500 });
		}

		const sentSet = new Set(
			sentItems?.map((i: { item_id: string }) => i.item_id) || [],
		);
		const pendingNotifications: {
			id: string;
			title: string;
			body: string;
			url: string;
		}[] = [];

		// Eski etkinliklere/bloglara spam bildirim atmamak için sadece son 7 gün içinde eklenmiş olanları hedefleyelim.
		const sevenDaysAgo = new Date();
		sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

		// 2. Yeni Blogları Kontrol Et
		for (const post of posts) {
			const postDate = new Date(post.publishDate);
			if (postDate >= sevenDaysAgo) {
				const sid = `post_${post.slug}`;
				if (!sentSet.has(sid)) {
					pendingNotifications.push({
						id: sid,
						title: "Yeni Blog Yazısı Yayında! 📝",
						body: post.title,
						url: `/blog/${post.slug}`,
					});
				}
			}
		}

		// 3. Yeni Etkinlikleri Kontrol Et
		for (const evt of events) {
			const eventDate = new Date(evt.date);
			// Etkinlik tarihi gelecekte veya son 7 gün içindeyse ve bildirim atılmadıysa
			if (eventDate >= sevenDaysAgo && !evt.id.startsWith("weekly-")) {
				const sid = `event_${evt.id}`;
				if (!sentSet.has(sid)) {
					pendingNotifications.push({
						id: sid,
						title: "ALH: Yeni Etkinlik Duyurusu! 🎉",
						body: evt.title,
						url: "/etkinlikler",
					});
				}
			}
		}

		if (pendingNotifications.length === 0) {
			return NextResponse.json({
				success: true,
				message: "Yeni bir içerik bulunamadı, bildirim gönderilmedi.",
			});
		}

		// 4. Gönderilecek yeni içerik var, aboneleri veritabanından çek.
		const { data: dbData } = await supabase
			.from("push_subscriptions")
			.select("subscription");
		const dbSubscriptions = dbData as DbPushSubscription[] | null;

		let totalSent = 0;

		for (const item of pendingNotifications) {
			// İçeriğin bildirimini attı olarak işaretle (Supabase'e önden işleyelim ki çift taraflı isteklerde duplicate atmasın)
			await supabase.from("sent_notifications").insert({ item_id: item.id });

			if (dbSubscriptions && dbSubscriptions.length > 0) {
				const payload = JSON.stringify({
					title: item.title,
					body: item.body,
					url: item.url,
				});

				const promises = dbSubscriptions.map((row) => {
					return webpush
						.sendNotification(row.subscription, payload)
						.catch((err: WebPushError) => {
							// Kullanıcı izinleri silmişse aboneliğini kaldırıyoruz
							if (err.statusCode === 404 || err.statusCode === 410) {
								supabase
									.from("push_subscriptions")
									.delete()
									.eq("endpoint", row.subscription.endpoint)
									.then();
							}
						});
				});

				await Promise.allSettled(promises);
			}

			totalSent++;
		}

		return NextResponse.json({
			success: true,
			message: `${totalSent} yeni içerik bildirimi başarıyla gönderildi!`,
		});
	} catch (error) {
		console.error("Auto Sync Push Error:", error);
		return NextResponse.json({ error: "Internal Error" }, { status: 500 });
	}
}
