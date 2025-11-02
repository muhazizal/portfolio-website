<template>
	<div class="py-12">
		<UContainer>
			<!-- Header -->
			<div class="max-w-3xl mb-16 opacity-0 animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-6 font-pt-serif">Projects</h1>
				<p class="text-xl text-gray-400">
					A collection of projects I've built, showcasing my skills and creativity.
				</p>
			</div>

			<!-- Projects Grid -->
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<UCard
					v-for="(project, index) in projects"
					:key="project._path"
					class="opacity-0 animate-fade-in flex flex-col"
					:class="`stagger-${Math.min(index + 1, 5)}`"
				>
					<div class="space-y-4 flex-1 flex flex-col">
						<!-- Badge for featured -->
						<div v-if="project.featured" class="flex justify-end">
							<UBadge color="primary" variant="subtle">Featured</UBadge>
						</div>

						<!-- Category & Title -->
						<div>
							<p class="text-sm text-primary mb-2">{{ project.category }}</p>
							<h2 class="text-xl font-semibold font-pt-serif">{{ project.title }}</h2>
						</div>

						<!-- Description -->
						<p class="text-gray-300 flex-1">{{ project.description }}</p>

						<!-- Content Body -->
						<ContentRenderer
							v-if="project.body"
							:value="project"
							class="prose prose-sm prose-invert max-w-none flex-1"
						/>

						<!-- Technologies -->
						<div>
							<div class="flex flex-wrap gap-2">
								<UBadge
									v-for="tech in project.tech"
									:key="tech"
									color="gray"
									variant="outline"
									size="xs"
								>
									{{ tech }}
								</UBadge>
							</div>
						</div>

						<!-- Links -->
						<div class="flex gap-3 pt-2">
							<UButton
								v-if="project.demo"
								:to="project.demo"
								target="_blank"
								size="sm"
								icon="i-heroicons-arrow-top-right-on-square"
							>
								Live Demo
							</UButton>
							<UButton
								v-if="project.github"
								:to="project.github"
								target="_blank"
								color="gray"
								size="sm"
								icon="i-simple-icons-github"
							>
								GitHub
							</UButton>
						</div>
					</div>
				</UCard>
			</div>

			<!-- Empty State -->
			<div v-if="!projects?.length" class="text-center py-12">
				<p class="text-gray-400">No projects found.</p>
			</div>
		</UContainer>
	</div>
</template>

<script setup>
// Fetch all projects
const { data: projects } = await useAsyncData('all-projects', () =>
	queryContent('projects').sort({ order: 1 }).find()
)

// SEO
useSeoMeta({
	title: 'Projects - Muhamad Aziz Al-asaad Portfolio',
	description: 'Browse my portfolio of web development projects and applications',
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
