<template>
	<div>
		<AppHeader />
		<main class="min-h-screen">
			<NuxtPage />
		</main>
		<AppFooter />
	</div>
</template>

<script setup>
useSeoMeta({
	title: 'Your Name - Portfolio',
	ogTitle: 'Your Name - Portfolio',
	description: 'Software Engineer Portfolio - Showcasing my work, experience, and articles',
	ogDescription: 'Software Engineer Portfolio - Showcasing my work, experience, and articles',
	ogImage: '/og-image.jpg',
	twitterCard: 'summary_large_image',
})
</script>
