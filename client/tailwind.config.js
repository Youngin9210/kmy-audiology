module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				beltoneBlue: {
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
				beltoneClearBlue: {
					50: '#f6fbfe',
					100: '#edf7fd',
					200: '#d2ebf9',
					300: '#b6dff6',
					400: '#80c7ef',
					500: '#49afe8',
					600: '#429ed1',
					700: '#3783ae',
					800: '#2c698b',
					900: '#245672',
				},
				beltoneOrange: {
					50: '#fdf8f3',
					100: '#fbf2e8',
					200: '#f5dec5',
					300: '#efcaa3',
					400: '#e2a35d',
					500: '#d67b18',
					600: '#c16f16',
					700: '#a15c12',
					800: '#804a0e',
					900: '#693c0c',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
