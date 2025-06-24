import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return false;
	}

	return true;
};

export const getErrorMessage = (error: unknown) => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Something went wrong";
	}

	return message;
};
export function turkishToEnglish(text: string): string {
	const turkishChars: { [key: string]: string } = {
		ç: "c",
		Ç: "C",
		ğ: "g",
		Ğ: "G",
		ı: "i",
		İ: "i",
		ö: "o",
		Ö: "O",
		ş: "s",
		Ş: "S",
		ü: "u",
		Ü: "U",
	};

	return text.replace(/[çÇğĞıİöÖşŞüÜ]/g, (char) => turkishChars[char] || char);
}
