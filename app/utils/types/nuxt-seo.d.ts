// types/nuxt-seo.d.ts
import type { SiteConfig } from '@nuxt/seo'

declare module '@nuxt/schema' {
	interface NuxtConfig {
		site?: SiteConfig
	}
	interface NuxtOptions {
		site?: SiteConfig
	}
}
