<template>
	<div>
		<AppHeader />
		<main class="min-h-screen bg-white text-gray-800">
			<NuxtPage />
		</main>
		<AppFooter />
	</div>
</template>

<script setup>
useSeoMeta({
	title: 'Muhamad Aziz Al-asaad - Portfolio',
	ogTitle: 'Muhamad Aziz Al-asaad - Portfolio',
	description: 'Software Engineer - Showcasing my work, experience, and articles',
	ogDescription: 'Software Engineer - Showcasing my work, experience, and articles',
	ogImage: '/og-image.jpg',
	twitterCard: 'summary_large_image',
})
</script>