<template>
	<div class="py-12 max-w-4xl mx-auto">
		<UContainer>
			<!-- Header -->
			<div class="max-w-3xl mb-16 opacity-0 animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">Projects</h1>
				<p class="text-xl text-gray-600">
					A collection of projects I've built, showcasing my skills and creativity.
				</p>
			</div>

			<!-- Projects Grid -->
			<div class="grid gap-6">
				<UCard
					v-for="(project, index) in projects"
					:key="project.meta.path"
					class="opacity-0 animate-fade-in flex flex-col bg-royal-50 border border-royal-300"
					:class="`stagger-${Math.min(index + 1, 5)}`"
				>
					<div class="space-y-4 flex-1 flex flex-col">
						<!-- Category & Title -->
						<div>
							<p class="text-sm text-primary mb-2">{{ project.meta.category }}</p>
							<h2 class="text-xl font-semibold">{{ project.meta.title }}</h2>
						</div>

						<!-- Description -->
						<p class="text-gray-700 flex-1">{{ project.meta.description }}</p>

						<!-- Content Body -->
						<ContentRenderer
							v-if="project.meta.body"
							:value="project.meta.body"
							class="prose prose-sm max-w-none flex-1"
						/>

						<!-- Technologies -->
						<div>
							<div class="flex flex-wrap gap-2">
								<UBadge
									v-for="tech in project.meta.technologies"
									:key="tech"
									color="gray"
									variant="subtle"
									size="xs"
								>
									{{ tech }}
								</UBadge>
							</div>
						</div>

						<!-- Links -->
						<div class="flex gap-3 pt-2">
							<UButton
								v-if="project.meta.demo"
								:to="project.meta.demo"
								target="_blank"
								size="sm"
								icon="i-heroicons-arrow-top-right-on-square"
							>
								Demo
							</UButton>
							<UButton
								v-if="project.meta.github"
								:to="project.meta.github"
								target="_blank"
								color="gray"
								size="sm"
								icon="i-simple-icons-github"
							>
								Code
							</UButton>
						</div>
					</div>
				</UCard>
			</div>

			<!-- Empty State -->
			<div v-if="!projects?.length" class="text-center py-12">
				<p class="text-gray-600">No projects found.</p>
			</div>
		</UContainer>
	</div>
</template>

<script setup>
// Fetch all projects
const { data: projects } = await useAsyncData('all-projects', () =>
	queryCollection('project').select('meta').all()
)

// SEO
useSeoMeta({
	title: 'Projects - Muhamad Aziz Al-asaad Portfolio',
	description: 'Browse my portfolio of web development projects and applications',
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
