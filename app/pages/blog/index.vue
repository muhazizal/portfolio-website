<template>
	<div class="py-12 max-w-4xl mx-auto">
		<UContainer>
			<!-- Header -->
			<div class="max-w-3xl mb-16 opacity-0 animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
				<p class="text-xl text-gray-600">
					Thoughts, tutorials, and insights about web development and technology.
				</p>
			</div>

			<!-- Articles Grid -->
			<div class="grid gap-8">
				<NuxtLink
					v-for="(article, index) in articles"
					:key="article.meta.path"
					:to="article.meta.path"
					class="group opacity-0 animate-fade-in"
					:class="`stagger-${Math.min(index + 1, 5)}`"
				>
					<div class="h-full hover:border-primary/50 transition-all duration-300">
						<div class="space-y-4">
							<!-- Date & Tags -->
							<div class="flex items-center justify-between text-sm">
								<span class="text-gray-600">{{ formatDate(article.meta.date) }}</span>
							</div>

							<!-- Title -->
							<h2 class="text-2xl font-semibold group-hover:text-primary transition-colors">
								{{ article.meta.title }}
							</h2>

							<!-- Description -->
							<p class="text-gray-700 line-clamp-3">
								{{ article.meta.description }}
							</p>

							<!-- Tags -->
							<div class="flex flex-wrap gap-2">
								<UBadge
									v-for="tag in article.meta.tags?.slice(0, 3)"
									:key="tag"
									color="secondary"
									variant="outline"
								>
									{{ tag }}
								</UBadge>
							</div>

							<!-- Read More -->
							<div class="flex items-center gap-2 text-primary text-sm font-medium pt-2">
								Read article
								<UIcon
									name="i-heroicons-arrow-right"
									class="group-hover:translate-x-1 transition-transform"
								/>
							</div>
						</div>
					</div>
				</NuxtLink>
			</div>

			<!-- Empty State -->
			<div v-if="!articles?.length" class="text-center py-12">
				<p class="text-gray-600">No articles found.</p>
			</div>
		</UContainer>
	</div>
</template>

<script setup>
// Fetch all articles
const { data: articles } = await useAsyncData('all-articles', () =>
	queryCollection('blog').select('meta').all()
)

// Format date helper
const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

// SEO
useSeoMeta({
	title: 'Blog - Muhamad Aziz Al-asaad Portfolio',
	description: 'Read articles about web development, programming, and technology',
})
</script>
