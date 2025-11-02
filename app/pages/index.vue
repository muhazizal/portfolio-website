<template>
	<div>
		<!-- Hero Section -->
		<section class="py-20 md:py-32">
			<UContainer>
				<div class="max-w-3xl opacity-0 animate-fade-in">
					<h1 class="text-5xl md:text-7xl font-bold mb-6 font-pt-serif">
						Hi, I'm <span class="text-primary">Muhamad Aziz Al-asaad</span>
					</h1>
					<p class="text-xl md:text-2xl text-gray-600 mb-8 opacity-0 animate-fade-in stagger-1">
						A passionate fullstack javascript engineer crafting seamless and engaging web
						experiences.
					</p>
					<div class="flex gap-4 opacity-0 animate-fade-in stagger-2">
						<UButton to="/projects" size="lg">View My Work</UButton>
						<UButton to="/about" color="gray" variant="outline" size="lg">About Me</UButton>
					</div>
				</div>
			</UContainer>
		</section>

		<!-- About Section -->
		<section class="py-20 bg-royal-100/50">
			<UContainer>
				<div class="max-w-3xl">
					<h2 class="text-3xl md:text-4xl font-bold mb-6 font-pt-serif">About Me</h2>
					<p class="text-lg text-gray-700 mb-4">
						I'm a fullstack javascript engineer with a passion for creating elegant solutions to
						complex problems. With expertise in modern web technologies, I build scalable
						applications that are both user-friendly and developer-friendly.
					</p>
					<p class="text-lg text-gray-700 mb-6">
						I specialize in Vue.js, Nuxt.js, and Node.js, focusing on performance, accessibility,
						and user experience.
					</p>
					<UButton to="/about" color="primary" variant="link">Learn more about me →</UButton>
				</div>
			</UContainer>
		</section>

		<!-- Latest Work Experience -->
		<section class="py-20">
			<UContainer>
				<div class="flex justify-between items-center mb-12">
					<h2 class="text-3xl md:text-4xl font-bold font-pt-serif">Work Experience</h2>
					<UButton to="/work" color="primary" variant="link">View all →</UButton>
				</div>
				<div class="grid gap-6 md:grid-cols-2">
					<UCard
						v-for="(item, index) in latestWork"
						:key="item._path"
						class="opacity-0 animate-fade-in"
						:class="`stagger-${index + 1}`"
					>
						<div class="space-y-3">
							<div class="flex justify-between items-start">
								<h3 class="text-xl font-semibold font-pt-serif">{{ item.title }}</h3>
								<span class="text-sm text-gray-600">{{ item.period }}</span>
							</div>
							<p class="text-primary">{{ item.company }}</p>
							<p class="text-gray-700">{{ item.description }}</p>
							<div class="flex flex-wrap gap-2">
								<UBadge v-for="tech in item.technologies" :key="tech" color="gray" variant="subtle">
									{{ tech }}
								</UBadge>
							</div>
						</div>
					</UCard>
				</div>
			</UContainer>
		</section>

		<!-- Latest Projects -->
		<section class="py-20 bg-royal-100/50">
			<UContainer>
				<div class="flex justify-between items-center mb-12">
					<h2 class="text-3xl md:text-4xl font-bold font-pt-serif">Featured Projects</h2>
					<UButton to="/projects" color="primary" variant="link">View all →</UButton>
				</div>
				<div class="grid gap-6 md:grid-cols-2">
					<UCard
						v-for="(project, index) in featuredProjects"
						:key="project._path"
						class="opacity-0 animate-fade-in"
						:class="`stagger-${index + 1}`"
					>
						<div class="space-y-3">
							<h3 class="text-xl font-semibold font-pt-serif">{{ project.title }}</h3>
							<p class="text-gray-700">{{ project.description }}</p>
							<div class="flex flex-wrap gap-2">
								<UBadge v-for="tech in project.tech" :key="tech" color="primary" variant="subtle">
									{{ tech }}
								</UBadge>
							</div>
							<div class="flex gap-3 pt-2">
								<UButton
									v-if="project.demo"
									:to="project.demo"
									target="_blank"
									size="xs"
									icon="i-heroicons-arrow-top-right-on-square"
								>
									Demo
								</UButton>
								<UButton
									v-if="project.github"
									:to="project.github"
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
					<h2 class="text-3xl md:text-4xl font-bold font-pt-serif">Latest Articles</h2>
					<UButton to="/blog" color="primary" variant="link">View all →</UButton>
				</div>
				<div class="grid gap-6 md:grid-cols-2">
					<UCard
						v-for="(article, index) in latestArticles"
						:key="article._path"
						class="opacity-0 animate-fade-in"
						:class="`stagger-${index + 1}`"
					>
						<div class="space-y-3">
							<div class="text-sm text-gray-600">
								{{ formatDate(article.date) }}
							</div>
							<h3 class="text-xl font-semibold">{{ article.title }}</h3>
							<p class="text-gray-700">{{ article.description }}</p>
							<div class="flex flex-wrap gap-2">
								<UBadge v-for="tag in article.tags" :key="tag" color="gray" variant="subtle">
									{{ tag }}
								</UBadge>
							</div>
							<UButton :to="article._path" color="primary" variant="link" class="mt-2">
								Read article →
							</UButton>
						</div>
					</UCard>
				</div>
			</UContainer>
		</section>

		<!-- FAQ Section -->
		<section class="py-20 bg-royal-100/50">
			<UContainer>
				<div class="max-w-3xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-bold mb-12 text-center font-pt-serif">
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
					<h2 class="text-3xl md:text-4xl font-bold mb-6 font-pt-serif">Let's Work Together</h2>
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
// Fetch latest work experiences
const { data: latestWork } = await useAsyncData('latest-work', () =>
	queryContent('work').sort({ order: 1 }).limit(2).find()
)

// Fetch featured projects
const { data: featuredProjects } = await useAsyncData('featured-projects', () =>
	queryContent('projects').where({ featured: true }).sort({ order: 1 }).limit(2).find()
)

// Fetch latest articles
const { data: latestArticles } = await useAsyncData('latest-articles', () =>
	queryContent('blog').sort({ date: -1 }).limit(2).find()
)

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
		content:
			'Payment is done through Wise with down payment 50% and the rest upon project completion.',
	},
]

// SEO
useSeoMeta({
	title: 'Home - Muhamad Aziz Al-asaad Portfolio',
	description: 'Fullstack Javascript Engineer - Showcasing my work, experience, and articles',
})
</script>
