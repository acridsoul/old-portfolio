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
		},
	},
	plugins: [],
}
