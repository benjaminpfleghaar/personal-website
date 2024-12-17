import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			darkgray: "#6f6f6f",
			lightgray: "#8d8d8d",
			foreground: "#161616",
			background: "#ffffff",
		},
		fontFamily: {
			sans: ["var(--font-geist)"],
		},
		extend: {
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
};
export default config;
