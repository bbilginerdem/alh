import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

import webpush from "web-push";

// Supabase client
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

async function removeDeadSubscription(endpointToRemove: string) {
	try {
		await supabase
			.from("push_subscriptions")
			.delete()
			.eq("endpoint", endpointToRemove);
	} catch (e) {
		console.error("Failed to prune dead subscription from Supabase:", e);
	}
}

export async function POST(req: Request) {
	try {
		const { title, body, url } = await req.json();

		if (
			!process.env.VAPID_PRIVATE_KEY ||
			!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
		) {
			return NextResponse.json(
				{ error: "VAPID keyleri eksik. .env dosyanızı kontrol edin." },
				{ status: 500 },
			);
		}

		if (!supabaseUrl || !supabaseKey) {
			return NextResponse.json(
				{ error: "Supabase keyleri eksik. .env dosyanızı kontrol edin." },
				{ status: 500 },
			);
		}

		// Supabase'den aboneleri çek
		const { data: dbSubscriptions, error } = await supabase
			.from("push_subscriptions")
			.select("subscription");

		if (error || !dbSubscriptions || dbSubscriptions.length === 0) {
			return NextResponse.json(
				{ error: "Kayıtlı abone bulunamadı veya veritabanı hatası." },
				{ status: 404 },
			);
		}

		let sendCount = 0;
		let failCount = 0;

		const payload = JSON.stringify({
			title: title || "ALH - Yeni Etkinlik 🎉",
			body: body || "Bir test bildirimi",
			url: url || "/",
		});

		// Gönderimleri Paralel Yap
		const sendPromises = dbSubscriptions.map((row: any) => {
			const sub = row.subscription;
			return webpush.sendNotification(sub, payload).then(
				() => {
					sendCount++;
				},
				(err) => {
					failCount++;
					console.error("Failed to send to client:", err.statusCode);
					// Geçersiz veya süresi dolan abonelikleri temizle
					if (err.statusCode === 404 || err.statusCode === 410) {
						removeDeadSubscription(sub.endpoint);
					}
				},
			);
		});

		await Promise.allSettled(sendPromises);

		return NextResponse.json({
			success: true,
			message: `Push gönderimleri tamamlandı. Başarılı: ${sendCount}, Hatalı/Silinen: ${failCount}`,
		});
	} catch (error) {
		console.error("[Push Send] Error processing notifications:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
