<template>
	<div class="py-12">
		<UContainer>
			<!-- Header -->
			<div class="max-w-3xl mx-auto mb-20 text-center opacity-0 animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
				<p class="text-xl text-gray-600">
					Get to know me, my journey, and what drives my passion for fullstack javascript
					engineering.
				</p>
			</div>

			<!-- Journey Section -->
			<section class="max-w-4xl mx-auto mb-24 opacity-0 animate-fade-in stagger-1">
				<div class="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 class="text-3xl md:text-4xl font-bold mb-6">My Journey</h2>
						<div class="space-y-4 text-gray-700">
							<p>
								My journey into fullstack javascript engineering began with curiosity and evolved
								into a lifelong passion. What started as tinkering with HTML and CSS has grown into
								building complex, scalable web applications.
							</p>
							<p>
								Over the years, I've had the privilege of working with talented teams, learning from
								experienced mentors, and contributing to projects that make a real impact. Each
								challenge has been an opportunity to grow and refine my craft.
							</p>
							<p>
								Today, I focus on creating elegant, performant web experiences using modern
								technologies like Vue.js, Nuxt.js, and TypeScript. I'm constantly learning and
								staying current with the rapidly evolving web ecosystem.
							</p>
						</div>
					</div>
					<div class="relative">
						<UCard class="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
							<div class="space-y-6">
								<div class="flex items-start gap-4">
									<div class="p-3 rounded-lg bg-primary/10 border border-primary/20">
										<UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-primary my-auto" />
									</div>
									<div>
										<h3 class="font-semibold mb-1">Continuous Learning</h3>
										<p class="text-sm text-gray-600">Always learning new tools and techniques</p>
									</div>
								</div>
								<div class="flex items-start gap-4">
									<div class="p-3 rounded-lg bg-primary/10 border border-primary/20">
										<UIcon name="i-heroicons-light-bulb" class="w-6 h-6 text-primary" />
									</div>
									<div>
										<h3 class="font-semibold mb-1">Problem Solving</h3>
										<p class="text-sm text-gray-600">
											Finding elegant solutions to complex challenges
										</p>
									</div>
								</div>
								<div class="flex items-start gap-4">
									<div class="p-3 rounded-lg bg-primary/10 border border-primary/20">
										<UIcon name="i-heroicons-users" class="w-6 h-6 text-primary" />
									</div>
									<div>
										<h3 class="font-semibold mb-1">Collaboration</h3>
										<p class="text-sm text-gray-600">
											Working with teams to build amazing products
										</p>
									</div>
								</div>
							</div>
						</UCard>
					</div>
				</div>
			</section>

			<!-- Development Philosophy -->
			<section class="max-w-4xl mx-auto mb-24 opacity-0 animate-fade-in stagger-2">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl font-bold mb-4">Development Philosophy</h2>
					<p class="text-lg text-gray-600">The principles that guide my work and decision-making</p>
				</div>

				<div class="grid md:grid-cols-3 gap-6">
					<UCard class="bg-royal-50">
						<div class="text-center space-y-3">
							<div
								class="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
							>
								<UIcon name="i-heroicons-rocket-launch" class="w-6 h-6 text-primary" />
							</div>
							<h3 class="text-xl font-semibold">Performance First</h3>
							<p class="text-sm text-gray-600">
								Every millisecond matters. I build applications that are fast, efficient, and
								provide an exceptional user experience.
							</p>
						</div>
					</UCard>
					<UCard class="bg-royal-50">
						<div class="text-center space-y-3">
							<div
								class="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
							>
								<UIcon name="i-heroicons-code-bracket" class="w-6 h-6 text-primary" />
							</div>
							<h3 class="text-xl font-semibold">Clean Code</h3>
							<p class="text-sm text-gray-600">
								Write code that's readable, maintainable, and scalable. Good code is a gift to your
								future self and team.
							</p>
						</div>
					</UCard>

					<UCard class="bg-royal-50">
						<div class="text-center space-y-3">
							<div
								class="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
							>
								<UIcon name="i-heroicons-heart" class="w-6 h-6 text-primary" />
							</div>
							<h3 class="text-xl font-semibold">User-Centric</h3>
							<p class="text-sm text-gray-600">
								At the end of the day, it's about the user. Build with empathy, accessibility, and
								user needs in mind.
							</p>
						</div>
					</UCard>
				</div>

				<UCard class="mt-8 bg-linear-to-tr from-primary/20 to-primary/10">
					<div class="space-y-4">
						<h3 class="text-xl font-semibold">My Approach</h3>
						<ul class="space-y-3 text-gray-700">
							<li class="flex items-start gap-3">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-primary shrink-0 mt-0.5"
								/>
								<span
									>Start with understanding the problem and user needs before jumping to
									solutions</span
								>
							</li>
							<li class="flex items-start gap-3">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-primary shrink-0 mt-0.5"
								/>
								<span>Write tests to ensure reliability and catch bugs early in development</span>
							</li>
							<li class="flex items-start gap-3">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-primary shrink-0 mt-0.5"
								/>
								<span>Embrace feedback and iteration to continuously improve the product</span>
							</li>
							<li class="flex items-start gap-3">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-5 h-5 text-primary shrink-0 mt-0.5"
								/>
								<span
									>Document decisions and code to make onboarding and collaboration smoother</span
								>
							</li>
						</ul>
					</div>
				</UCard>
			</section>

			<!-- Passions & Hobbies -->
			<section class="max-w-4xl mx-auto opacity-0 animate-fade-in stagger-3">
				<div class="text-center mb-12">
					<h2 class="text-3xl md:text-4xl font-bold mb-4">Beyond Code</h2>
					<p class="text-lg text-gray-600">What I do when I'm not coding</p>
				</div>

				<div class="grid md:grid-cols-2 gap-6">
					<UCard class="bg-royal-50">
						<div class="flex items-start gap-4">
							<div class="p-3 rounded-lg bg-primary/10">
								<UIcon name="i-heroicons-book-open" class="w-6 h-6 text-primary" />
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Learning</h3>
								<p class="text-sm text-gray-600">
									I'm an avid learner, constantly exploring on technology, philosophy, and personal
									development. Learning is a lifelong journey.
								</p>
							</div>
						</div>
					</UCard>

					<UCard class="bg-royal-50">
						<div class="flex items-start gap-4">
							<div class="p-3 rounded-lg bg-primary/10">
								<UIcon name="i-heroicons-sparkles" class="w-6 h-6 text-primary" />
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Side Projects</h3>
								<p class="text-sm text-gray-600">
									Always tinkering with new ideas and technologies through personal projects and
									experiments.
								</p>
							</div>
						</div>
					</UCard>

					<UCard class="bg-royal-50">
						<div class="flex items-start gap-4">
							<div class="p-3 rounded-lg bg-primary/10">
								<UIcon name="i-heroicons-chat-bubble-left-right" class="w-6 h-6 text-primary" />
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Sports</h3>
								<p class="text-sm text-gray-600">
									Active in sports, whether it's playing video games, workouts, or simply engaging
									in physical activity.
								</p>
							</div>
						</div>
					</UCard>

					<UCard class="bg-royal-50">
						<div class="flex items-start gap-4">
							<div class="p-3 rounded-lg bg-primary/10">
								<UIcon name="i-heroicons-pencil-square" class="w-6 h-6 text-primary" />
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">Writing</h3>
								<p class="text-sm text-gray-600">
									I enjoy sharing knowledge through technical writing and blog posts, helping others
									learn from my experiences.
								</p>
							</div>
						</div>
					</UCard>
				</div>
			</section>

			<!-- CTA -->
			<section class="max-w-3xl mx-auto mt-24 text-center opacity-0 animate-fade-in stagger-4">
				<UCard class="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
					<div class="space-y-6">
						<h2 class="text-3xl font-bold">Let's Connect</h2>
						<p class="text-lg text-gray-700">
							I'm always open to discussing new opportunities, interesting projects, or just having
							a conversation about technology.
						</p>
						<div class="flex justify-center gap-4">
							<UButton to="mailto:muhazizal.26@gmail.com" size="lg" icon="i-heroicons-envelope">
								Send me an email
							</UButton>
							<UButton
								to="https://linkedin.com/in/muhamad-aziz-al-asaad"
								target="_blank"
								size="lg"
								color="gray"
								variant="outline"
								icon="i-simple-icons-linkedin"
							>
								Connect on LinkedIn
							</UButton>
						</div>
					</div>
				</UCard>
			</section>
		</UContainer>
	</div>
</template>

<script setup>
// SEO
useSeoMeta({
	title: 'About - Muhamad Aziz Al-asaad Portfolio',
	description:
		'Learn more about my journey, development philosophy, and what drives my passion for fullstack javascript engineering',
})
</script>
