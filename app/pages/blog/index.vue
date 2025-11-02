<template>
	<div class="py-12">
		<UContainer>
			<!-- Header -->
			<div class="max-w-3xl mb-16 opacity-0 animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
				<p class="text-xl text-gray-400">
					Thoughts, tutorials, and insights about web development and technology.
				</p>
			</div>

			<!-- Articles Grid -->
			<div class="grid gap-8 md:grid-cols-2 max-w-5xl">
				<NuxtLink
					v-for="(article, index) in articles"
					:key="article._path"
					:to="article._path"
					class="group opacity-0 animate-fade-in"
					:class="`stagger-${Math.min(index + 1, 5)}`"
				>
					<UCard class="h-full hover:border-primary/50 transition-all duration-300">
						<div class="space-y-4">
							<!-- Date & Tags -->
							<div class="flex items-center justify-between text-sm">
								<span class="text-gray-400">{{ formatDate(article.date) }}</span>
								<UBadge v-if="article.featured" color="primary" variant="subtle"> Featured </UBadge>
							</div>

							<!-- Title -->
							<h2 class="text-2xl font-semibold group-hover:text-primary transition-colors">
								{{ article.title }}
							</h2>

							<!-- Description -->
							<p class="text-gray-300 line-clamp-3">
								{{ article.description }}
							</p>

							<!-- Tags -->
							<div class="flex flex-wrap gap-2">
								<UBadge
									v-for="tag in article.tags?.slice(0, 3)"
									:key="tag"
									color="gray"
									variant="outline"
									size="xs"
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
					</UCard>
				</NuxtLink>
			</div>

			<!-- Empty State -->
			<div v-if="!articles?.length" class="text-center py-12">
				<p class="text-gray-400">No articles found.</p>
			</div>
		</UContainer>
	</div>
</template>

<script setup>
// Fetch all articles
const { data: articles } = await useAsyncData('all-articles', () =>
	queryContent('blog').sort({ date: -1 }).find()
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
	title: 'Blog - Your Name Portfolio',
	description: 'Read articles about web development, programming, and technology',
})
</script>
