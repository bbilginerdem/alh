"use client";

import { useCookieConsent } from "@/components/CookieConsentProvider";

/** Reopens the consent panel so a saved choice can be changed (KVKK/ePrivacy right to withdraw). */
const CookiePreferencesButton = () => {
	const { openPreferences } = useCookieConsent();
	return (
		<button
			type="button"
			onClick={openPreferences}
			className="cursor-pointer transition-colors duration-300 hover:text-zinc-100 hover:underline"
		>
			Çerez Tercihleri
		</button>
	);
};

export default CookiePreferencesButton;
