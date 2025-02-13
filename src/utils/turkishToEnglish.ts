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
