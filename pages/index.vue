<template>
  <div class="m-20"> 
    <div class="text-center shadow-sm mb-12 text-3xl font-bold text-gray-900 text-black">
      Products 
    </div>
    <div class="flex flex-row justify-center">
      <div class="w-1/6 bg-white rounded-lg shadow-md mr-4" v-for="product in products" :key="product.id">
        <a class="flex justify-center h-56	">
          <img class="p-8 rounded-t-lg" :src="`${product.images[0]}?width=144`"/> 
        </a>
        <div class="px-5 pb-5">
          <div>
            <h5 class="text-xl text-center font-semibold mb-8 text-gray-900 ">
              <nuxt-link :to="`/products/${product.id}`"> {{product.title}} </nuxt-link>
            </h5>
          </div>
          <div class="flex justify-between items-center">
              <span class="text-3xl font-bold text-gray-900 text-black">${{product.price}}</span>
              <div>
                <nuxt-link :to="`/products/${product.id}`" class="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-600 hover:bg-indigo-500 "> View Product </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useProductsStore } from '../store/products';
const productsStore = useProductsStore();
const runtimeConfig = useRuntimeConfig();
const { data: products } = await useAsyncData('products', () => productsStore.fetchProducts(runtimeConfig.public.apiBase, runtimeConfig.public.apiKey))
  definePageMeta({
    layout: "default"
  });
</script>