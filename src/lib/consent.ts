// Single source of truth for the cookie-consent decision.
// The first-party cookie is authoritative (readable by middleware/server later);
// localStorage mirrors it and backfills legacy choices made before this system existed.

export type CookieConsentValue = "accepted" | "declined";

export const CONSENT_COOKIE_NAME = "cookie_consent";
export const CONSENT_STORAGE_KEY = "cookieConsent";
export const CONSENT_UPDATED_EVENT = "alh:cookie-consent-updated";

const ONE_YEAR_SECONDS = 31_536_000;

const isClient = () => typeof document !== "undefined";

const isConsentValue = (value: string | null): value is CookieConsentValue =>
	value === "accepted" || value === "declined";

export function readCookie(name: string): string | null {
	if (!isClient()) return null;
	const prefix = `${name}=`;
	const row = document.cookie
		.split(";")
		.map((part) => part.trim())
		.find((part) => part.startsWith(prefix));
	return row ? decodeURIComponent(row.slice(prefix.length)) : null;
}

export function getStoredConsent(): CookieConsentValue | null {
	if (!isClient()) return null;
	const fromCookie = readCookie(CONSENT_COOKIE_NAME);
	if (isConsentValue(fromCookie)) return fromCookie;
	// Legacy value stored before the cookie was introduced — adopt and keep it in sync.
	const fromStorage = localStorage.getItem(CONSENT_STORAGE_KEY);
	return isConsentValue(fromStorage) ? fromStorage : null;
}

export function persistConsent(value: CookieConsentValue | null): void {
	if (!isClient()) return;

	// SameSite=Lax is required for the cookie to survive on https, and the Secure
	// flag is only valid there — serving over http (local dev) must omit it.
	const secure = window.location.protocol === "https:" ? "; Secure" : "";

	if (value === null) {
		document.cookie = `${CONSENT_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
		localStorage.removeItem(CONSENT_STORAGE_KEY);
	} else {
		document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax${secure}`;
		localStorage.setItem(CONSENT_STORAGE_KEY, value);
	}

	window.dispatchEvent(new Event(CONSENT_UPDATED_EVENT));
}

export const isAnalyticsEnabled = (): boolean => getStoredConsent() === "accepted";
