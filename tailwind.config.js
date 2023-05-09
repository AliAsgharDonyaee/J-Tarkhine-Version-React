/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		borderRadius: {
			DEFAULT: "4px",
			none: "0",
			"1x": "4px",
			"2x": "8px",
			"3x": "16px",
			"4x": "24px",
			"5x": "32px",
			"6x": "64px",
		},
		colors: {
			// mains color
			"Main-Tint-1": "#E5F2E9",
			"Main-Tint-2": "#CAE4D3",
			"Main-Tint-3": "#B0D7BD",
			"Main-Tint-4": "#96C9A7",
			"Main-Tint-5": "#7CBC91",
			"Main-Tint-6": "#61AE7B",
			"Main-Tint-7": "#4E9968",
			Primary: "#417F56",
			"Main-Shade-1": "#396F4B",
			"Main-Shade-2": "#315F41",
			"Main-Shade-3": "#294F36",
			"Main-Shade-4": "#21402B",
			"Main-Shade-5": "#183020",
			"Main-Shade-6": "#102016",
			"Main-Shade-7": "#08100B",

			// netural colors
			"Neutral-Gray-1": "#F9F9F9",
			"Neutral-Gray-2": "#E1E1E1",
			"Neutral-Gray-3": "#EDEDED",
			"Neutral-Gray-4": "#CBCBCB",
			"Neutral-Gray-5": "#ADADAD",
			"Neutral-Gray-6": "#757575",
			"Neutral-Gray-7": "#717171",
			"Neutral-Gray-8": "#353535",
			"Neutral-Black": "#0C0C0C",

			// condition colors
			"Condition-Error": "#C30000",
			"Condition-Error-light": "#ED2E2E",
			"Condition-Error-Extralight": "#FFF2F2",
			"Condition-Success": "#00966D",
			"Condition-Success-light": "#00BA88",
			"Condition-Success-Extralight": "#F3FDFA",
			"Condition-Warning": "#A9791C",
			"Condition-Warning-light": "#F4B740",
			"Condition-Warning-Extralight": "#FFF8E1",
		},
		extend: {
			spacing: {
				"1x": "8px",
				"2x": "16px",
				"3x": "24px",
				"4x": "32px",
				"5x": "40px",
				"6x": "48px",
				"7x": "56px",
				"8x": "64px",
				"9x": "80px",
				"10x": "120px",
				"11x": "160px",
			},
			boxShadow: {
				"drop-shadow-2x": "0px 2px 2px rgba(0, 0, 0, 0.25);",
				"drop-shadow-4x": "0px 4px 4px rgba(0, 0, 0, 0.25);",
				"drop-shadow-6x": "0px 6px 6px rgba(0, 0, 0, 0.25);",
				"drop-shadow-8x": "0px 8px 8px rgba(0, 0, 0, 0.25);",
				"drop-shadow-12x": "0px 12px 12px rgba(0, 0, 0, 0.25);",
				"drop-shadow-16x": "0px 16px 16px rgba(0, 0, 0, 0.25);",
				"cart-shadow":
					"0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);",
				"contact-cart-shadow":
					"0px 42px 17px rgba(0, 0, 0, 0.01), 0px 24px 14px rgba(0, 0, 0, 0.05), 0px 11px 11px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);",
			},
			typography: (theme) => ({
				css: {
					Display1: {
						
					}
				}


				// Display1: theme("font-bold", "text-[64px]"),
				// Display2: theme("font-bold", "text-[56px]"),

				// "Body-XL": theme("font-base", "text-[20px]"),
				// "Body-LG": theme("font-base", "text-[18px]"),
				// "Body-MD": theme("font.base", "text.16px"),
				// "Body-SM": theme("font-base", "text-[14px]"),

				// "Caption-LG": theme("font-bold", "text-[14px]"),
				// "Caption-MD": theme("font-base", "text-[12px]"),
				// "Caption-SM": theme("font-bold", "text-[10px]"),

				// "Button-LG": theme("font-base", "text-[16px]"),
				// "Button-SM": theme("font-base", "text-[14px]"),

				// "Overline-LG": theme("font-base", "text-[16px]"),
				// "Overline-SM": theme("font-bold", "text-[12px]"),
			}),
		},
	},
	plugins: [require("@tailwindcss/typography"), require("autoprefixer"), require("postcss")],
};
