<template>
	<footer class="border-t border-gray-200 py-12 bg-royal-50/70">
		<UContainer>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- About -->
				<div>
					<h3 class="text-lg font-semibold mb-4 font-pt-serif">Muhamad Aziz Al-asaad</h3>
					<p class="text-sm text-gray-600">
						A passionate fullstack javascript engineer crafting seamless and engaging web
						experiences.
					</p>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-lg font-semibold mb-4 font-pt-serif">Quick Links</h3>
					<ul class="space-y-2">
						<li v-for="link in navigation" :key="link.to">
							<NuxtLink
								:to="link.to"
								class="text-sm text-gray-600 hover:text-primary transition-colors"
							>
								{{ link.label }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Social Links -->
				<div>
					<h3 class="text-lg font-semibold mb-4 font-pt-serif">Connect</h3>
					<div class="flex gap-4">
						<UButton
							icon="i-simple-icons-github"
							color="gray"
							variant="ghost"
							to="https://github.com/muhazizal"
							target="_blank"
							aria-label="GitHub"
						/>
						<UButton
							icon="i-simple-icons-linkedin"
							color="gray"
							variant="ghost"
							to="https://linkedin.com/in/muhamad-aziz-al-asaad"
							target="_blank"
							aria-label="LinkedIn"
						/>
						<UButton
							icon="i-simple-icons-instagram"
							color="gray"
							variant="ghost"
							to="https://www.instagram.com/muhazizal"
							target="_blank"
							aria-label="Instagram"
						/>
					</div>
				</div>
			</div>

			<div class="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
				<p>&copy; {{ new Date().getFullYear() }} Muhamad Aziz Al-asaad. All rights reserved.</p>
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
