"use client";

import { Bell } from "lucide-react";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
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
		<Button
			title="Bildirimleri aç"
			type="button"
			onClick={handleSubscribe}
			containerClass="flex-center mt-5"
			leftIcon={<Bell />}
		/>
	);
}
