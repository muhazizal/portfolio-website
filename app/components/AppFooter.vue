<template>
	<footer class="border-t border-gray-800 py-12 mt-24">
		<UContainer>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- About -->
				<div>
					<h3 class="text-lg font-semibold mb-4">Your Name</h3>
					<p class="text-sm text-gray-400">
						Software Engineer passionate about building beautiful and functional web applications.
					</p>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li v-for="link in navigation" :key="link.to">
							<NuxtLink
								:to="link.to"
								class="text-sm text-gray-400 hover:text-primary transition-colors"
							>
								{{ link.label }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Social Links -->
				<div>
					<h3 class="text-lg font-semibold mb-4">Connect</h3>
					<div class="flex gap-4">
						<UButton
							icon="i-simple-icons-github"
							color="gray"
							variant="ghost"
							to="https://github.com/yourusername"
							target="_blank"
							aria-label="GitHub"
						/>
						<UButton
							icon="i-simple-icons-linkedin"
							color="gray"
							variant="ghost"
							to="https://linkedin.com/in/yourusername"
							target="_blank"
							aria-label="LinkedIn"
						/>
						<UButton
							icon="i-simple-icons-twitter"
							color="gray"
							variant="ghost"
							to="https://twitter.com/yourusername"
							target="_blank"
							aria-label="Twitter"
						/>
					</div>
				</div>
			</div>

			<div class="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
				<p>&copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
			</div>
		</UContainer>
	</footer>
</template>

<script setup>
const navigation = [
	{ label: 'Home', to: '/' },
	{ label: 'Work', to: '/work' },
	{ label: 'Projects', to: '/projects' },
	{ label: 'Blog', to: '/blog' },
	{ label: 'About', to: '/about' },
]
</script>
