<template>
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-full bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Successful Orders</h1>
          <h2 class="font-semibold text-2xl">1 Order/s</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5">Order Id</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Customer name</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Customer email</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-2/5 text-center">Order Informations</h3>
        </div>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-1/5">
            <div class="flex flex-col justify-center ml-4 flex-grow"> 
              <span class="font-bold text-sm">1as21sq</span>
            </div>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">Boca Danut</span>
          <span class="text-center w-1/5 font-semibold text-sm">testemail@gmail.com</span>
          <span class="text-center w-2/5 font-semibold text-sm">[ Basic T-shirt V-Neck: price: 19.9, quantity:1, Cost:19.9] Total: 19.9</span>
        </div>
        <nuxt-link class="flex font-semibold text-indigo-600 text-sm mt-10" :to="`/`"> 
            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Continue Shopping
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
