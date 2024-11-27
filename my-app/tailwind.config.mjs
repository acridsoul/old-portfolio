/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false, // Disable Preflight
	  },
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
