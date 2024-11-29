/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false, // Disable Preflight
	  },
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-green': '#36e414',
			},
			fontFamily: {
				iceland: ['Iceland', 'sans-serif']
			},
			backgroundImage: {
				'gradient-rainbow': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
			},
			textShadow: {
				'blue': '2px 2px 4px rgba(0, 0, 255, 0.5)',
				'glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)',
			},
		},
	},
	plugins: [
		require('tailwindcss-textshadow')
	],
}
