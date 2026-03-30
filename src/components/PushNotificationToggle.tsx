"use client";

import { Bell } from "lucide-react";
import toast from "react-hot-toast";
import { subscribeToPushNotifications } from "@/lib/push-utils";

export default function PushNotificationToggle() {
	const handleSubscribe = async () => {
		const success = await subscribeToPushNotifications();
		if (success) {
			toast.success("Bildirimlere başarıyla abone oldunuz!");
		} else {
			toast.error("Bildirim izni alınamadı veya cihaz uygun değil.");
		}
	};

	return (
		<button
			type="button"
			onClick={handleSubscribe}
			className="flex items-center gap-2 rounded-full border border-black px-3 py-1 font-semibold text-sm transition-colors hover:bg-black hover:text-white"
			title="Yeni etkinlik bildirimlerini aç"
		>
			<Bell size={16} />
			<span>Bildirimleri Aç</span>
		</button>
	);
}
