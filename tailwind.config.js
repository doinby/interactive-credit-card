/** @type {import('tailwindcss').Config} */
import '@tailwindcss/forms';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#6448FE',
				secondary: '#600594',
				error: '#FF5252',
				'light-purple': '#DEDDDF',
				'neutral-purple': '#8E8593',
				'dark-purple': '#21092F',
			},
		},
	},
	plugins: ['@tailwindcss/forms'],
};
