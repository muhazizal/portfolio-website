<template>
	<div class="py-12">
		<UContainer>
			<!-- Header -->
			<div class="max-w-3xl mb-16 opacity-0 animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">Work Experience</h1>
				<p class="text-xl text-gray-400">
					My professional journey and the roles I've held throughout my career.
				</p>
			</div>

			<!-- Work Experience List -->
			<div class="max-w-4xl space-y-8">
				<div
					v-for="(work, index) in workExperiences"
					:key="work._path"
					class="opacity-0 animate-fade-in"
					:class="`stagger-${Math.min(index + 1, 5)}`"
				>
					<UCard>
						<div class="space-y-4">
							<!-- Header -->
							<div class="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
								<div>
									<h2 class="text-2xl font-semibold mb-2">{{ work.title }}</h2>
									<div class="flex flex-col gap-1 text-gray-400">
										<p class="text-lg text-primary">{{ work.company }}</p>
										<div class="flex items-center gap-3 text-sm">
											<span class="flex items-center gap-1">
												<UIcon name="i-heroicons-map-pin" />
												{{ work.location }}
											</span>
											<span class="flex items-center gap-1">
												<UIcon name="i-heroicons-calendar" />
												{{ work.period }}
											</span>
										</div>
									</div>
								</div>
							</div>

							<!-- Description -->
							<p class="text-gray-300">{{ work.description }}</p>

							<!-- Content Body -->
							<ContentRenderer
								v-if="work.body"
								:value="work"
								class="prose prose-invert max-w-none"
							/>

							<!-- Technologies -->
							<div>
								<h3 class="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h3>
								<div class="flex flex-wrap gap-2">
									<UBadge
										v-for="tech in work.technologies"
										:key="tech"
										color="gray"
										variant="subtle"
									>
										{{ tech }}
									</UBadge>
								</div>
							</div>
						</div>
					</UCard>
				</div>

				<!-- Empty State -->
				<div v-if="!workExperiences?.length" class="text-center py-12">
					<p class="text-gray-400">No work experience found.</p>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<script setup>
// Fetch all work experiences
const { data: workExperiences } = await useAsyncData('all-work', () =>
	queryContent('work').sort({ order: 1 }).find()
)

// SEO
useSeoMeta({
	title: 'Work Experience - Your Name Portfolio',
	description: 'Browse my professional work experience and career journey',
})
</script>

<style scoped>
@reference '../assets/css/main.css';

:deep(.prose) {
	@apply text-gray-300;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3) {
	@apply text-white;
}

:deep(.prose a) {
	@apply text-primary hover:underline;
}

:deep(.prose code) {
	@apply bg-gray-800 rounded px-1 py-0.5;
}
</style>
