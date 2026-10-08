"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cookie, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";

const setCookieSafely = async (name: string, value: string) => {
	const maxAge = 31536000;
	const path = "/";

	if ("cookieStore" in window) {
		try {
			await window.cookieStore.set({ name, value, path, expires: Date.now() + maxAge * 1000 });
			return;
		} catch {}
	}

	document.cookie = `${name}=${value}; path=${path}; max-age=${maxAge}; SameSite=Lax`;
};

const CookieConsent = () => {
	const [showBanner, setShowBanner] = useState(false);
	const bannerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		const shouldShow = !consent || consent === "pending";

		if (shouldShow) {
			setShowBanner(true);
		}
	}, []);

	useGSAP(() => {
		if (!showBanner || !bannerRef.current) return;

		gsap.fromTo(
			bannerRef.current,
			{ y: 100, opacity: 0 },
			{ y: 0, opacity: 0.95, duration: 1, delay: 2, ease: "power3.out" },
		);
	}, [showBanner]);

	const handleAccept = async () => {
		localStorage.setItem("cookieConsent", "accepted");
		await setCookieSafely("cookieConsent", "accepted");

		setShowBanner(false);
		toast.success("Çerez tercihleri kaydedildi!", {
			icon: "🍪",
			duration: 3000,
		});
	};

	const handleDecline = async () => {
		localStorage.setItem("cookieConsent", "declined");
		await setCookieSafely("cookieConsent", "declined");

		setShowBanner(false);
		toast("Çerez tercihleri kaydedildi.", {
			icon: "ℹ️",
			duration: 3000,
		});
	};

	const handleClose = () => {
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		<div
			className="fixed right-0 bottom-0 left-0 z-50 p-3 md:p-6"
			role="alert"
			aria-live="polite"
			aria-label="Çerez consent banner"
		>
			<div className="mx-auto max-w-6xl">
				<div
					ref={bannerRef}
					tabIndex={-1}
					className="relative rounded-2xl border border-orange-300/20 bg-zinc-900/95 p-4 shadow-2xl backdrop-blur-lg md:p-8"
				>
					<button
						type="button"
						onClick={handleClose}
						className="absolute top-2 right-2 rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-orange-300 md:top-4 md:right-4 md:p-2"
						aria-label="Kapat"
					>
						<X size={16} className="md:hidden" />
						<X size={20} className="hidden md:block" />
					</button>

					<div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
						<div className="hidden shrink-0 md:block">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-300/10">
								<Cookie className="h-8 w-8 text-orange-300" />
							</div>
						</div>

						<div className="flex-1">
							<h2 className="mb-1 font-almendra-sc font-bold text-base text-orange-300 md:mb-2 md:text-xl">
								🍪 Çerez Bildirimi
							</h2>
							<p className="text-xs text-zinc-300 leading-relaxed md:text-sm md:leading-relaxed">
								Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. Sitemizi
								kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.{" "}
								<a
									href="/privacy"
									className="text-orange-300 underline transition-colors hover:text-orange-200"
								>
									Gizlilik Politikası
								</a>
							</p>
						</div>

						<div className="flex items-center justify-center gap-2 sm:flex-row md:shrink-0">
							<Button
								title="Kabul Et"
								containerClass="!px-5 !py-2 text-xs md:!px-6 md:!py-2.5 md:text-sm"
								onClick={handleAccept}
							/>
							<Button
								title="Reddet"
								containerClass="!px-5 !py-2 text-xs md:!px-6 md:!py-2.5 md:text-sm border !text-zinc-100 border-orange-300/30 bg-transparent transition-all duration-300 hover:border-orange-300 hover:bg-orange-300/10 hover:text-orange-300 md:px-6 md:py-2.5 md:text-sm"
								onClick={handleDecline}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
