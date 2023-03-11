/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				spin: 'spin 5s linear infinite',
			},
			colors: {
				mycolor: '#0f0823',
			},
		},
	},
	plugins: [],
};
