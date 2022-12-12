/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poopins: ["Poppins", "sans-serif"],
			},
			colors: {
				transparant: "transparant",
				"blue-cstm-1": "#D0EDF5",
				"blue-cstm-2": "#D9F0F6",
				"blue-cstm-3": "#F3F6FB",
				"red-cstm-1": "#F3EDE4",
				"black-cstm-1": "#151B27",
				"gray-cstm-1": "#BAC5CC",
			},
			textColor: {
				"black-cstm-1": "#151B27",
			},
		},
	},
	plugins: [require("@headlessui/tailwindcss")],
};
