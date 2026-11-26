"use client";

import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import {
	CONSENT_UPDATED_EVENT,
	type CookieConsentValue,
	getStoredConsent,
	persistConsent,
} from "@/lib/consent";

interface CookieConsentContextValue {
	/** The persisted decision, or null when the visitor has not chosen yet. */
	consent: CookieConsentValue | null;
	/** True once storage has been read on the client (prevents SSR flash). */
	ready: boolean;
	/** Convenience flag: analytics may run. */
	analyticsEnabled: boolean;
	/** Whether the consent panel is currently on screen. */
	isPanelOpen: boolean;
	/** Record a decision, persist it and close the panel. */
	save: (value: CookieConsentValue) => void;
	/** Close the panel without recording a decision. */
	dismiss: () => void;
	/** Reopen the panel so an existing choice can be changed. */
	openPreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
	const [consent, setConsent] = useState<CookieConsentValue | null>(null);
	const [ready, setReady] = useState(false);
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	// Hydrate from storage on the client only; auto-open for undecided visitors.
	useEffect(() => {
		const stored = getStoredConsent();
		setConsent(stored);
		setIsPanelOpen(stored === null);
		setReady(true);
	}, []);

	// Keep every tab in sync so the analytics gate reacts when a choice changes elsewhere.
	useEffect(() => {
		const sync = () => setConsent(getStoredConsent());
		window.addEventListener(CONSENT_UPDATED_EVENT, sync);
		window.addEventListener("storage", sync);
		return () => {
			window.removeEventListener(CONSENT_UPDATED_EVENT, sync);
			window.removeEventListener("storage", sync);
		};
	}, []);

	const save = useCallback((value: CookieConsentValue) => {
		persistConsent(value);
		setConsent(value);
		setIsPanelOpen(false);
	}, []);

	const dismiss = useCallback(() => setIsPanelOpen(false), []);

	const openPreferences = useCallback(() => {
		setConsent(getStoredConsent());
		setIsPanelOpen(true);
	}, []);

	const value = useMemo<CookieConsentContextValue>(
		() => ({
			consent,
			ready,
			analyticsEnabled: consent === "accepted",
			isPanelOpen,
			save,
			dismiss,
			openPreferences,
		}),
		[consent, ready, isPanelOpen, save, dismiss, openPreferences],
	);

	return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent(): CookieConsentContextValue {
	const ctx = useContext(CookieConsentContext);
	if (!ctx) {
		throw new Error("useCookieConsent must be used within a CookieConsentProvider");
	}
	return ctx;
}
