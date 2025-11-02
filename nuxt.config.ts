// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',

	devtools: { enabled: true },

	modules: [
		'@nuxt/devtools',
		'@nuxt/eslint',
		'@nuxt/test-utils/module',
		'@nuxt/image',
		'@nuxt/icon',
		'@nuxt/fonts',
		'@nuxt/ui',
		'@nuxtjs/seo',
		'@nuxt/content',
	],

	css: ['~/assets/css/main.css'],

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{ property: 'og:image', content: '/og-image.jpg' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:image', content: '/og-image.jpg' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	site: {
		url: 'https://muhazizal.dev',
		name: 'Muhamad Aziz Al-asaad - Portfolio',
		description: 'Fullstack Javascript Engineer - Showcasing my work, experience, and articles',
		defaultLocale: 'en',
	},

	image: {
		quality: 80,
		format: ['webp'],
	},

	fonts: {
		families: [
			{ name: 'PT Sans', provider: 'google' },
			{ name: 'PT Serif', provider: 'google' },
		],
	},
})
