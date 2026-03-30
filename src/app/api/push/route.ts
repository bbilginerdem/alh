import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Supabase client ayarları
// SUPABASE_SERVICE_ROLE_KEY veya NEXT_PUBLIC_SUPABASE_ANON_KEY kullanılabilir
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
	process.env.SUPABASE_SECRET_KEY ||
	process.env.SUPABASE_SERVICE_ROLE_KEY ||
	process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
	"";

// Edge/Serverless uyumlu Supabase client oluşturma
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
	try {
		const subscription = await req.json();

		if (!subscription?.endpoint) {
			return NextResponse.json(
				{ error: "Invalid subscription data. Endpoint is required." },
				{ status: 400 },
			);
		}

		if (!supabaseUrl || !supabaseKey) {
			console.error("Supabase URL veya Api Key eksik!");
			return NextResponse.json(
				{ error: "Veritabanı bağlantı hatası" },
				{ status: 500 },
			);
		}

		// Supabase 'push_subscriptions' tablosuna kaydet
		// 'endpoint' sütununun UNIQUE yapılmış olması gerekir ki mükerrer kayıt olmasın
		const { error } = await supabase.from("push_subscriptions").upsert(
			{
				endpoint: subscription.endpoint,
				subscription: subscription, // jsonb sütununa direkt PWA objesini yazıyoruz
			},
			{ onConflict: "endpoint" },
		);

		if (error) {
			console.error("[Supabase Push API] Error upserting:", error);
			throw error;
		}

		return NextResponse.json(
			{
				success: true,
				message: "Abonelik başarıyla Supabase'e kaydedildi.",
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("[Push API POST] Error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}

export async function DELETE(req: Request) {
	try {
		const { endpoint } = await req.json();

		if (!endpoint) {
			return NextResponse.json(
				{ error: "Invalid data. Endpoint is required." },
				{ status: 400 },
			);
		}

		// Supabase'den endpoint eşleşmesini sil
		const { error } = await supabase
			.from("push_subscriptions")
			.delete()
			.eq("endpoint", endpoint);

		if (error) {
			throw error;
		}

		return NextResponse.json({ success: true, message: "Abonelik silindi." });
	} catch (_error) {
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}

export async function GET() {
	try {
		const { count, error } = await supabase
			.from("push_subscriptions")
			.select("*", { count: "exact", head: true });

		if (error) throw error;

		return NextResponse.json({
			success: true,
			message: "Push notification API aktiftir. Supabase DB kullanılıyor.",
			subscriberCount: count || 0,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Supabase Connection Error." },
			{ status: 500 },
		);
	}
}
