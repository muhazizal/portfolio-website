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
	title: 'Muhamad Aziz Al-asaad - Portfolio',
	ogTitle: 'Muhamad Aziz Al-asaad - Portfolio',
	description: 'Software Engineer Portfolio - Showcasing my work, experience, and articles',
	ogDescription: 'Software Engineer Portfolio - Showcasing my work, experience, and articles',
	ogImage: '/og-image.jpg',
	twitterCard: 'summary_large_image',
})
</script>
