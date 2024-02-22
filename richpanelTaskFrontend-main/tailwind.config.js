module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#0e5394",
			},
			borderWidth: {
				1: "1px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
