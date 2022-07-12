<template>
	<div class="flex items-center bg-white text-gray-700 shadow h-20">
		<div class="h-16 flex items-center w-full ml-20">
			<a class="h-6 w-30 font-bold text-indigo-600 text-2xl" href="/">
				Nuxt-Shop
			</a>
		</div>
		<ul class="flex">
			<li> 
				<nuxt-link :to="`/`" class="h-16 px-6 flex flex justify-center items-center w-full focus:text-indigo-600 font-semibold tracking-tight text-gray-900"> 
					Home
				</nuxt-link>
			</li>
			<li> 
				<nuxt-link :to="`/orders`" class="h-16 px-6 flex flex justify-center items-center w-full focus:text-indigo-600 font-semibold tracking-tight text-gray-900"> 
					Orders
				</nuxt-link>
			</li>
			<li class="hover:bg-gray-100 mr-20">
				<nuxt-link :to="`/cart`" class="h-16 px-6 flex flex justify-center items-center w-full focus:text-indigo-600"> 
					<span class="relative inline-block">
						<svg
							class="h-5 w-5 mr-2"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<circle cx="9" cy="21" r="1"></circle>
							<circle cx="20" cy="21" r="1"></circle>
							<path
								d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
								2-1.61L23 6H6">
							</path>
						</svg>
						<span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
							1
						</span>
					</span>
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>
<script setup>
</script>