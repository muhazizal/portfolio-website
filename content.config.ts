import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		work: defineCollection({
			type: 'data',
			source: 'work/*.md',
		}),
		project: defineCollection({
			type: 'data',
			source: 'project/*.md',
		}),
		blog: defineCollection({
			type: 'data',
			source: 'blog/*.md',
		}),
	},
})
