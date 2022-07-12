<template>
  <div class="m-20"> 
    <div class="text-center shadow-sm mb-12 text-3xl font-bold text-gray-900 text-black">
      Products 
    </div>
    <div class="flex flex-row justify-center">
      <div class="w-1/6 bg-white rounded-lg shadow-md mr-4">
        <a class="flex justify-center h-56	">
          <img class="p-8 rounded-t-lg" src="https://api.apisful.com/v1/files/9WpdQW5/0cf894bbc8f2e0857388396dc48972f9/asa.png?width=400"/> 
        </a>
        <div class="px-5 pb-5">
          <div>
            <h5 class="text-xl text-center font-semibold mb-8 text-gray-900 ">
              <nuxt-link :to="`/products/4o53eZW`"> LeBron James T-shirt </nuxt-link>
            </h5>
          </div>
          <div class="flex justify-between items-center">
              <span class="text-3xl font-bold text-gray-900 text-black">$20</span>
              <div>
                <nuxt-link :to="`/products/4o53eZW`" class="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-600 hover:bg-indigo-500 "> View Product </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: "default"
  });
</script>