<template>
	<div class="py-12">
		<UContainer>
			<article class="max-w-3xl mx-auto">
				<!-- Back Button -->
				<NuxtLink
					to="/blog"
					class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary mb-8 transition-colors"
				>
					<UIcon name="i-heroicons-arrow-left" />
					Back to Blog
				</NuxtLink>

				<!-- Article Header -->
				<header class="mb-12 opacity-0 animate-fade-in">
					<!-- Meta -->
					<div class="flex items-center gap-3 text-sm text-gray-600 mb-4">
						<span>{{ formatDate(article.date) }}</span>
						<span>•</span>
						<span>{{ article.author }}</span>
					</div>

					<!-- Title -->
					<h1 class="text-4xl md:text-6xl font-bold mb-6 font-pt-serif">
						{{ article.title }}
					</h1>

					<!-- Description -->
					<p class="text-xl text-gray-700 mb-6">
						{{ article.description }}
					</p>

					<!-- Tags -->
					<div class="flex flex-wrap gap-2">
						<UBadge v-for="tag in article.tags" :key="tag" color="primary" variant="subtle">
							{{ tag }}
						</UBadge>
					</div>
				</header>

				<!-- Article Content -->
				<div class="opacity-0 animate-fade-in stagger-1">
					<ContentRenderer :value="article" class="prose prose-lg max-w-none" />
				</div>

				<!-- Article Footer -->
				<footer class="mt-16 pt-8 border-t border-gray-200 opacity-0 animate-fade-in stagger-2">
					<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
						<!-- Share -->
						<div>
							<h3 class="text-sm font-semibold text-gray-600 mb-3 font-pt-serif">
								Share this article
							</h3>
							<div class="flex gap-3">
								<UButton
									:to="`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(fullUrl)}`"
									target="_blank"
									color="gray"
									variant="ghost"
									icon="i-simple-icons-twitter"
									aria-label="Share on Twitter"
								/>
								<UButton
									:to="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`"
									target="_blank"
									color="gray"
									variant="ghost"
									icon="i-simple-icons-linkedin"
									aria-label="Share on LinkedIn"
								/>
							</div>
						</div>

						<!-- Back to Blog -->
						<UButton to="/blog" color="primary" variant="outline"> View All Articles </UButton>
					</div>
				</footer>
			</article>
		</UContainer>
	</div>
</template>

<script setup>
const route = useRoute()

// Fetch the article
const { data: article } = await useAsyncData(`article-${route.path}`, () =>
	queryContent(route.path).findOne()
)

// Handle not found
if (!article.value) {
	throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

// Format date helper
const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

// Full URL for sharing
const fullUrl = computed(() => {
	if (import.meta.client) {
		return window.location.href
	}
	return ''
})

// SEO
useSeoMeta({
	title: `${article.value.title} - Muhamad Aziz Al-asaad Blog`,
	description: article.value.description,
	ogTitle: article.value.title,
	ogDescription: article.value.description,
	ogImage: article.value.image,
	twitterCard: 'summary_large_image',
})
</script>

<style scoped>
@reference '~/assets/css/main.css';

:deep(.prose) {
	@apply text-gray-700;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4) {
	@apply text-gray-900 font-bold;
}

:deep(.prose h1) {
	@apply text-4xl mt-8 mb-4;
}

:deep(.prose h2) {
	@apply text-3xl mt-8 mb-4;
}

:deep(.prose h3) {
	@apply text-2xl mt-6 mb-3;
}

:deep(.prose p) {
	@apply my-6 leading-relaxed;
}

:deep(.prose a) {
	@apply text-primary hover:underline;
}

:deep(.prose code) {
	@apply bg-gray-100 rounded px-1.5 py-0.5 text-sm;
}

:deep(.prose pre) {
	@apply bg-gray-100 rounded-lg p-4 overflow-x-auto border border-gray-200;
}

:deep(.prose pre code) {
	@apply bg-transparent p-0;
}

:deep(.prose ul),
:deep(.prose ol) {
	@apply my-6 space-y-2;
}

:deep(.prose li) {
	@apply my-2;
}

:deep(.prose blockquote) {
	@apply border-l-4 border-primary pl-4 italic text-gray-600;
}

:deep(.prose strong) {
	@apply text-gray-900 font-semibold;
}
</style>
