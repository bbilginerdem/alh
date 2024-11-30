/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				general: ["var(--font-general)"],
				zentry: ["var(--font-zentry)"],
				"circular-web": ["var(--font-circularweb-book)"],
				"robert-medium": ["var(--font-robert-medium)"],
				"robert-regular": ["var(--font-robert-regular)"],
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