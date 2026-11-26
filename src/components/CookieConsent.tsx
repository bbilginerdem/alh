"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useCookieConsent } from "@/components/CookieConsentProvider";
import Button from "@/components/ui/Button";

interface SwitchProps {
	id: string;
	checked: boolean;
	onChange: (next: boolean) => void;
	disabled?: boolean;
	label: string;
}

const Switch = ({ id, checked, onChange, disabled = false, label }: SwitchProps) => (
	<button
		type="button"
		role="switch"
		id={id}
		aria-checked={checked}
		aria-label={label}
		disabled={disabled}
		onClick={() => onChange(!checked)}
		className={clsx(
			"relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900",
			checked ? "bg-orange-300" : "bg-zinc-600",
			disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
		)}
	>
		<span
			className={clsx(
				"inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200",
				checked ? "translate-x-6" : "translate-x-1",
			)}
		/>
	</button>
);

const CookieConsent = () => {
	const { ready, isPanelOpen, consent, save, dismiss } = useCookieConsent();
	const [analyticsChoice, setAnalyticsChoice] = useState(false);
	const bannerRef = useRef<HTMLDivElement>(null);

	// Re-seed the visible toggle each time the panel opens (reflects the saved choice).
	useEffect(() => {
		if (isPanelOpen) setAnalyticsChoice(consent === "accepted");
	}, [isPanelOpen, consent]);

	// Escape closes the panel without changing a stored decision.
	useEffect(() => {
		if (!isPanelOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") dismiss();
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isPanelOpen, dismiss]);

	useGSAP(() => {
		if (!isPanelOpen || !bannerRef.current) return;
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduceMotion) {
			gsap.set(bannerRef.current, { y: 0, opacity: 1 });
			return;
		}
		gsap.fromTo(
			bannerRef.current,
			{ y: 100, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
		);
	}, [isPanelOpen]);

	if (!ready || !isPanelOpen) return null;

	const commit = (value: boolean) => {
		save(value ? "accepted" : "declined");
		if (value) {
			toast.success("Çerez tercihleri kaydedildi!", { icon: "🍪", duration: 3000 });
		} else {
			toast("Yalnızca zorunlu çerezler kullanılıyor.", { icon: "🔒", duration: 3000 });
		}
	};

	return (
		<section
			className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 md:p-6"
			aria-labelledby="cookie-consent-title"
			aria-describedby="cookie-consent-desc"
		>
			<div className="mx-auto max-w-6xl">
				<div
					ref={bannerRef}
					tabIndex={-1}
					className="pointer-events-auto relative rounded-2xl border border-orange-300/20 bg-zinc-900/95 p-4 shadow-2xl backdrop-blur-lg outline-none md:p-8"
				>
					<button
						type="button"
						onClick={dismiss}
						className="absolute top-2 right-2 cursor-pointer rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-orange-300 md:top-4 md:right-4 md:p-2"
						aria-label="Kapat"
					>
						<X size={16} className="md:hidden" />
						<X size={20} className="hidden md:block" />
					</button>

					<div className="flex flex-col gap-4 md:flex-row md:gap-8">
						<div className="flex-1">
							<div className="mb-2 flex items-center gap-3">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-300/10">
									<Cookie className="h-6 w-6 text-orange-300" />
								</div>
								<h2
									id="cookie-consent-title"
									className="font-almendra-sc text-base font-bold text-orange-300 md:text-xl"
								>
									Çerez Tercihleri
								</h2>
							</div>

							<p
								id="cookie-consent-desc"
								className="mb-4 text-xs leading-relaxed text-zinc-300 md:text-sm"
							>
								Sitemizi iyileştirmek için analitik çerezler kullanıyoruz. Kararınızı
								değiştirebilirsiniz. Zorunlu çerezler site işlevleri için her zaman aktiftir.{" "}
								<a
									href="/gizlilik-politikasi"
									className="text-orange-300 underline transition-colors hover:text-orange-200"
								>
									Gizlilik Politikası
								</a>
							</p>

							<ul className="mb-4 space-y-3">
								<li className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-3">
									<div className="flex items-start gap-3">
										<ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
										<div>
											<p className="text-sm font-semibold text-zinc-100">Zorunlu</p>
											<p className="text-xs text-zinc-400">
												Sitenin çalışması için gereklidir, kapatılamaz.
											</p>
										</div>
									</div>
									<Switch
										id="consent-necessary"
										label="Zorunlu çerezler (her zaman açık)"
										checked
										disabled
										onChange={() => {}}
									/>
								</li>

								<li className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-3">
									<div className="flex items-start gap-3">
										<Cookie className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
										<div>
											<label
												htmlFor="consent-analytics"
												className="block text-sm font-semibold text-zinc-100"
											>
												Analitik
											</label>
											<p className="text-xs text-zinc-400">
												Vercel Web Analytics ile anonim kullanım ölçümü.
											</p>
										</div>
									</div>
									<Switch
										id="consent-analytics"
										label="Analitik çerezleri"
										checked={analyticsChoice}
										onChange={setAnalyticsChoice}
									/>
								</li>
							</ul>
						</div>

						<div className="flex shrink-0 flex-row flex-wrap items-center justify-center gap-2 self-center md:flex-col md:justify-start">
							<Button
								title="Tümünü Reddet"
								containerClass="!px-5 !py-2 text-xs md:!px-6 md:!py-2.5 md:text-sm border !text-zinc-100 border-orange-300/30 bg-transparent transition-all duration-300 hover:border-orange-300 hover:bg-orange-300/10 hover:text-orange-300"
								onClick={() => commit(false)}
							/>
							<Button
								title="Seçilenleri Kaydet"
								containerClass="!px-5 !py-2 text-xs md:!px-6 md:!py-2.5 md:text-sm border !text-zinc-100 border-orange-300/30 bg-transparent transition-all duration-300 hover:border-orange-300 hover:bg-orange-300/10 hover:text-orange-300"
								onClick={() => commit(analyticsChoice)}
							/>
							<Button
								title="Tümünü Kabul Et"
								containerClass="!px-5 !py-2 text-xs md:!px-6 md:!py-2.5 md:text-sm"
								onClick={() => commit(true)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CookieConsent;
