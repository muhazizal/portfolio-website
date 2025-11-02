<template>
	<div class="py-12 max-w-4xl mx-auto">
		<UContainer>
			<!-- Header -->
			<div class="max-w-3xl mb-16 opacity-0 animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">Work Experience</h1>
				<p class="text-xl text-gray-600">
					My professional journey and the roles I've held throughout my career.
				</p>
			</div>

			<!-- Work Experience List -->
			<div>
				<div class="max-w-4xl space-y-8">
					<div
						v-for="(work, index) in workExperiences"
						:key="work.meta.path"
						class="opacity-0 animate-fade-in"
						:class="`stagger-${Math.min(index + 1, 5)}`"
					>
						<UCard class="bg-linear-to-br from-primary/5 to-primary/15 border-primary/20">
							<div class="space-y-4">
								<!-- Header -->
								<div class="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
									<div>
										<h2 class="text-2xl font-semibold mb-2">{{ work.meta.title }}</h2>
										<div class="flex flex-col gap-1 text-gray-600">
											<p class="text-lg text-primary">{{ work.meta.company }}</p>
											<div class="flex items-center gap-3 text-sm">
												<span class="flex items-center gap-1">
													<UIcon name="i-heroicons-map-pin" />
													{{ work.meta.location }}
												</span>
												<span class="flex items-center gap-1">
													<UIcon name="i-heroicons-calendar" />
													{{ work.meta.period }}
												</span>
											</div>
										</div>
									</div>
								</div>

								<!-- Description -->
								<p class="text-gray-700">{{ work.meta.description }}</p>

								<!-- Content Body -->
								<ContentRenderer
									v-if="work.meta.body"
									:value="work.meta.body"
									class="prose max-w-none"
								/>

								<!-- Technologies -->
								<div>
									<h3 class="text-sm font-semibold text-gray-600 mb-2">Technologies Used</h3>
									<div class="flex flex-wrap gap-2">
										<UBadge
											v-for="tech in work.meta.technologies"
											:key="tech"
											color="secondary"
											variant="outline"
										>
											{{ tech }}
										</UBadge>
									</div>
								</div>
							</div>
						</UCard>
					</div>
				</div>

				<!-- Empty State -->
				<div v-if="!workExperiences?.length" class="text-center py-12">
					<p class="text-gray-600">No work experience found.</p>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<script setup>
// Fetch all work experiences
const { data: workExperiences } = await useAsyncData('all-work', () =>
	queryCollection('work').select('meta').all()
)

// SEO
useSeoMeta({
	title: 'Work Experience - Muhamad Aziz Al-asaad Portfolio',
	description: 'Browse my professional work experience and career journey',
})
</script>

<style scoped>
@reference '~/assets/css/main.css';

:deep(.prose) {
	@apply text-gray-700;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3) {
	@apply text-gray-900;
}

:deep(.prose a) {
	@apply text-primary hover:underline;
}

:deep(.prose code) {
	@apply bg-gray-100 rounded px-1 py-0.5;
}
</style>
