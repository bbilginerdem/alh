"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { useCookieConsent } from "@/components/CookieConsentProvider";
import { isAnalyticsEnabled } from "@/lib/consent";

// Defence in depth: even if the script is ever loaded, drop any event fired while
// consent is not currently granted (e.g. a race right before unmount).
const beforeSend = (event: BeforeSendEvent): BeforeSendEvent | null =>
	isAnalyticsEnabled() ? event : null;

/**
 * Gates Vercel Web Analytics behind explicit consent. The script is never injected
 * until the visitor accepts, so "Reddet" genuinely stops all tracking rather than
 * just hiding the banner.
 */
const AnalyticsGate = () => {
	const { analyticsEnabled } = useCookieConsent();
	if (!analyticsEnabled) return null;
	return <Analytics beforeSend={beforeSend} />;
};

export default AnalyticsGate;
