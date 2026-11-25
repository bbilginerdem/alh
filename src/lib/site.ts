export const SITE_URL = "https://www.ankaralindyhop.org";

export function absoluteUrl(path: string): string {
	return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}
