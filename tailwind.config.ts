/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["var(--font-inter)"],
				general: ["var(--font-general)"],
				zentry: ["var(--font-zentry)"],
			},
			colors: {
				blue: {
					50: "#DFDFF0",
					75: "#dfdff2",
					100: "#F0F2FA",
					200: "#010101",
					300: "#4FB7DD",
				},
				violet: {
					300: "#5724ff",
				},
				yellow: {
					100: "#8e983f",
					300: "#edff66",
				},
			},
		},
	},
	plugins: [],
};
