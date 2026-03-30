import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
// Alias the import to avoid collision with the global DOM PushSubscription
import webpush, {
	type WebPushError,
	type PushSubscription as WebPushSubscription,
} from "web-push";

// 1. Define exactly what the Database Row looks like
interface DbPushSubscription {
	subscription: WebPushSubscription; // Use our aliased type here
}

// 2. Define the payload for the POST request
interface PushPayload {
	title?: string;
	body?: string;
	url?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
	process.env.SUPABASE_SERVICE_ROLE_KEY ||
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
	"";

// Tip: If you have generated types, use createClient<Database>(...)
const supabase = createClient(supabaseUrl, supabaseKey);

webpush.setVapidDetails(
	process.env.VAPID_SUBJECT || "mailto:iletisim@ankaralindyhop.org",
	process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "",
	process.env.VAPID_PRIVATE_KEY || "",
);

async function removeDeadSubscription(endpointToRemove: string): Promise<void> {
	try {
		await supabase
			.from("push_subscriptions")
			.delete()
			.eq("endpoint", endpointToRemove);
	} catch (e) {
		console.error("Failed to prune dead subscription:", e);
	}
}

export async function POST(req: Request) {
	try {
		const { title, body, url }: PushPayload = await req.json();

		if (
			!process.env.VAPID_PRIVATE_KEY ||
			!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
		) {
			return NextResponse.json(
				{ error: "VAPID keys missing" },
				{ status: 500 },
			);
		}

		// MODERN SUPABASE SYNTAX:
		// Instead of .returns(), we cast the 'data' result or use the generic in .from
		const { data, error: dbError } = await supabase
			.from("push_subscriptions")
			.select("subscription");

		// Type assertion to bridge the gap if you aren't using a full 'Database' schema type
		const dbSubscriptions = data as DbPushSubscription[] | null;

		if (dbError || !dbSubscriptions || dbSubscriptions.length === 0) {
			return NextResponse.json(
				{ error: "No subscribers found" },
				{ status: 404 },
			);
		}

		const payload = JSON.stringify({
			title: title || "ALH - Yeni Etkinlik 🎉",
			body: body || "Bir test bildirimi",
			url: url || "/",
		});

		let sendCount = 0;
		let failCount = 0;

		const sendPromises = dbSubscriptions.map((row) => {
			const sub = row.subscription;

			// webpush.sendNotification now correctly sees 'sub' as WebPushSubscription
			return webpush
				.sendNotification(sub, payload)
				.then(() => {
					sendCount++;
				})
				.catch((err: WebPushError) => {
					failCount++;
					if (err.statusCode === 404 || err.statusCode === 410) {
						removeDeadSubscription(sub.endpoint);
					}
				});
		});

		await Promise.allSettled(sendPromises);

		return NextResponse.json({
			success: true,
			message: `Sent: ${sendCount}, Failed: ${failCount}`,
		});
	} catch (error) {
		console.error("[Push Send] Fatal Error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
