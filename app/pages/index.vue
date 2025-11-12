<template>
	<div class="max-w-4xl mx-auto">
		<!-- Hero Section -->
		<section class="py-20 md:py-32">
			<UContainer>
				<div class="max-w-3xl opacity-0 animate-fade-in">
					<h1 class="text-5xl md:text-7xl font-bold mb-6">
						Hi, I'm <span class="text-primary">Muhamad Aziz Al-asaad</span>
					</h1>
					<p class="text-xl md:text-2xl text-gray-600 mb-8 opacity-0 animate-fade-in stagger-1">
						A passionate software engineer crafting seamless and engaging web experiences.
					</p>
					<div class="flex gap-4 opacity-0 animate-fade-in stagger-2">
						<UButton to="/projects" size="lg">View My Work</UButton>
						<UButton to="/about" color="gray" variant="subtle" size="lg">About Me</UButton>
					</div>
				</div>
			</UContainer>
		</section>

		<!-- About Section -->
		<section class="py-20 bg-linear-to-r from-primary/5 to-primary/10 border-primary/20 rounded-lg">
			<UContainer>
				<div class="max-w-3xl">
					<h2 class="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
					<p class="text-lg text-gray-700 mb-4">
						I'm a software engineer with a passion for creating elegant solutions to complex
						problems. With expertise in modern web technologies, I build scalable applications that
						are both user-friendly and developer-friendly.
					</p>
					<p class="text-lg text-gray-700 mb-6">
						I specialize in Vue.js, Nuxt.js, and Node.js, focusing on performance, accessibility,
						and user experience.
					</p>
					<UButton to="/about" color="primary" variant="link">Learn more about me →</UButton>
				</div>
			</UContainer>
		</section>

		<!-- Work Experiences -->
		<section class="py-20">
			<UContainer>
				<div class="flex justify-between items-center mb-12">
					<h2 class="text-3xl md:text-4xl font-bold">Work Experience</h2>
					<UButton to="/work" color="primary" variant="link">View all →</UButton>
				</div>
				<div class="grid gap-6 md:grid-cols-2">
					<UCard
						v-for="({ meta: work }, index) in workExperience"
						:key="work.path"
						class="opacity-0 animate-fade-in bg-linear-to-br from-primary/5 to-primary/10 border-primary/20"
						:class="`stagger-${index + 1}`"
					>
						<div class="space-y-3">
							<div class="flex justify-between items-start">
								<h3 class="text-xl font-semibold">{{ work.title }}</h3>
								<span class="text-sm text-gray-600">{{ work.period }}</span>
							</div>
							<p class="font-semibold">{{ work.company }}</p>
							<p class="text-gray-700">{{ work.description }}</p>
							<div class="flex flex-wrap gap-2">
								<UBadge
									v-for="tech in work.technologies"
									:key="tech"
									color="secondary"
									variant="subtle"
								>
									{{ tech }}
								</UBadge>
							</div>
						</div>
					</UCard>
				</div>
			</UContainer>
		</section>

		<!-- Featured Projects -->
		<section class="py-20 bg-linear-to-b from-primary/5 to-primary/10 border-primary/20 rounded-lg">
			<UContainer>
				<div class="flex justify-between items-center mb-12">
					<UButton to="/projects" color="primary" variant="link">← View all</UButton>
					<h2 class="text-3xl md:text-4xl font-bold">Featured Projects</h2>
				</div>
				<div class="grid gap-6 md:grid-cols-2">
					<UCard
						v-for="(project, index) in featuredProjects"
						:key="project.meta.path"
						class="opacity-0 animate-fade-in bg-white"
						:class="`stagger-${index + 1}`"
					>
						<div class="space-y-3 text-right">
							<h3 class="text-xl font-semibold">{{ project.meta.title }}</h3>
							<p class="text-gray-700">{{ project.meta.description }}</p>
							<div class="flex flex-wrap gap-2 justify-end">
								<UBadge
									v-for="tech in project.meta.tech"
									:key="tech"
									color="secondary"
									variant="subtle"
								>
									{{ tech }}
								</UBadge>
							</div>
							<div class="flex gap-3 pt-2 justify-end">
								<UButton
									v-if="project.meta.demo"
									:to="project.meta.demo"
									target="_blank"
									size="xs"
									icon="i-heroicons-arrow-top-right-on-square"
									color="primary"
								>
									Demo
								</UButton>
								<UButton
									v-if="project.meta.github"
									:to="project.meta.github"
									target="_blank"
									color="gray"
									size="xs"
									icon="i-simple-icons-github"
								>
									Code
								</UButton>
							</div>
						</div>
					</UCard>
				</div>
			</UContainer>
		</section>

		<!-- Latest Articles -->
		<section class="py-20">
			<UContainer>
				<div class="flex justify-between items-center mb-12">
					<h2 class="text-3xl md:text-4xl font-bold">Latest Articles</h2>
					<UButton to="/blog" color="primary" variant="link">View all →</UButton>
				</div>
				<div class="grid gap-6 md:grid-cols-2">
					<div
						v-for="(article, index) in latestArticles"
						:key="article.meta.path"
						class="opacity-0 animate-fade-in"
						:class="`stagger-${index + 1}`"
					>
						<div class="space-y-3">
							<div class="text-sm text-gray-600">
								{{ formatDate(article.meta.date) }}
							</div>
							<h3 class="text-xl font-semibold">{{ article.meta.title }}</h3>
							<p class="text-gray-700">{{ article.meta.description }}</p>
							<div class="flex flex-wrap gap-2">
								<UBadge
									v-for="tag in article.meta.tags"
									:key="tag"
									color="secondary"
									variant="subtle"
								>
									{{ tag }}
								</UBadge>
							</div>
							<UButton :to="article.meta.path" color="primary" variant="link" class="mt-2">
								Read article →
							</UButton>
						</div>
					</div>
				</div>
			</UContainer>
		</section>

		<!-- FAQ Section -->
		<section class="py-20 bg-linear-to-r from-primary/5 to-primary/10 border-primary/20 rounded-lg">
			<UContainer>
				<div class="max-w-3xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
						Frequently Asked Questions
					</h2>
					<UAccordion :items="faqItems" />
				</div>
			</UContainer>
		</section>

		<!-- CTA Section -->
		<section class="py-20">
			<UContainer>
				<div class="max-w-3xl mx-auto text-center">
					<h2 class="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
					<p class="text-xl text-gray-700 mb-8">
						I'm available for freelance projects. Let's create something amazing together.
					</p>
					<UButton to="mailto:muhazizal.26@gmail.com" size="lg" icon="i-heroicons-envelope">
						Get in Touch
					</UButton>
				</div>
			</UContainer>
		</section>
	</div>
</template>

<script setup>
// Fetch work experiences
const { data: workExperience } = await useAsyncData('work-experiences', () =>
	queryCollection('work').select('meta').limit(2).all()
)
workExperience.value = workExperience.value.filter((work) => work.meta.featured)

// // Fetch featured projects
const { data: featuredProjects } = await useAsyncData('featured-project', () =>
	queryCollection('project').select('meta').limit(2).all()
)
featuredProjects.value = featuredProjects.value.filter((project) => project.meta.featured)

// // Fetch latest articles
const { data: latestArticles } = await useAsyncData('latest-articles', () =>
	queryCollection('blog').select('meta').limit(2).all()
)
latestArticles.value = latestArticles.value.filter((article) => article.meta.featured)

// Format date helper
const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

// FAQ items
const faqItems = [
	{
		label: 'What technologies do you specialize in?',
		content:
			'I specialize in Vue.js, Nuxt.js, TypeScript, and the modern JavaScript ecosystem. I also have experience with Node.js, REST APIs, and various databases.',
		defaultOpen: true,
	},
	{
		label: 'How can I hire you?',
		content:
			"You can reach out to me via email or through my social media profiles. I'm always open to discussing new opportunities and exciting projects.",
	},
	{
		label: 'Do you work remotely?',
		content:
			'Yes, I work remotely and have experience collaborating with distributed teams across different time zones.',
	},
	{
		label: 'What is your typical project timeline?',
		content:
			'Project timelines vary depending on scope and complexity. I provide detailed estimates after understanding your requirements and can work within your deadlines.',
	},
	{
		label: 'How can I pay you?',
		content: 'Payment is done through Wise with down payment and the rest upon project completion.',
	},
]

// SEO
useSeoMeta({
	title: 'Home - Muhamad Aziz Al-asaad Portfolio',
	description: 'Software Engineer - Showcasing my work, experience, and articles',
})
</script>
