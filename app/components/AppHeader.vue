<template>
	<header class="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-200 bg-white/70">
		<UContainer>
			<nav class="flex items-center justify-between h-16">
				<!-- Logo -->
				<NuxtLink
					to="/"
					class="text-xl font-bold hover:text-primary transition-colors font-pt-serif"
				>
					muhazizal.dev
				</NuxtLink>

				<!-- Desktop Navigation -->
				<ul class="hidden md:flex items-center gap-8">
					<li v-for="link in navigation" :key="link.to">
						<NuxtLink
							:to="link.to"
							class="text-sm hover:text-primary transition-colors"
							active-class="text-primary"
						>
							{{ link.label }}
						</NuxtLink>
					</li>
				</ul>

				<!-- Mobile Menu Button -->
				<UButton
					icon="i-heroicons-bars-3"
					color="gray"
					variant="ghost"
					class="md:hidden"
					@click="isMenuOpen = !isMenuOpen"
				/>
			</nav>

			<!-- Mobile Navigation -->
			<div v-if="isMenuOpen" class="md:hidden pb-4">
				<ul class="flex flex-col gap-4">
					<li v-for="link in navigation" :key="link.to">
						<NuxtLink
							:to="link.to"
							class="block py-2 hover:text-primary transition-colors"
							active-class="text-primary"
							@click="isMenuOpen = false"
						>
							{{ link.label }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</UContainer>
	</header>
</template>

<script setup>
const isMenuOpen = ref(false)

const navigation = [
	{ label: 'Home', to: '/' },
	{ label: 'Work', to: '/work' },
	{ label: 'Projects', to: '/projects' },
	{ label: 'Blog', to: '/blog' },
	{ label: 'About', to: '/about' },
]
</script>
