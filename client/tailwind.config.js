module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				beltone: {
					50: '#f2f7fa',
					100: '#e6eef4',
					200: '#bfd5e4',
					300: '#99bbd4',
					400: '#4d89b4',
					500: '#005694',
					600: '#004d85',
					700: '#00416f',
					800: '#003459',
					900: '#002a49',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
