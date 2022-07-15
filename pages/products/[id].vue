<template>
  <div class="w-full flex">
    <div class="product-gallery w-1/2 m-20 flex flex-col justify-center items-center ">
      <div class="rounded-lg shadow-md">
        <img :src="`${selectedImage}?width=400`" :alt="product.title">
      </div>
      <div class="product-gallery__thumbs flex ">
        <div  class="mt-10 mx-3 cursor-pointer" v-for="image in product.images" :key="image" @click="showImage(image)">
          <img :src="`${image}?width=54`" :alt="product.title">
        </div>
      </div>
    </div>
    <div class="w-1/2 m-20">
      <div class="mb-2 font-bold text-gray-800 text-2xl md:text-3xl">
        <h1>{{product.title}}</h1>
      </div>
      <div class="text-gray-500">
        {{product.description}}
      </div>
      <div>
        <div class="flex py-2  mt-4 mb-4 ">
          <span class="text-indigo-400 mr-1 mt-1">$</span>
          <span class="font-bold text-indigo-600 text-3xl">{{product.price}}</span>
        </div>
      </div>
      <div v-if="product.variants && product.variants.length > 0">
        <div class="mt-4 mb-4">
          <div class="field flex flex-col justify-start ">
            <label class="text-xs uppercase text-gray-800 tracking-wide font-bold">Select a color:</label>
            <select class="w-1/3 border border-gray-800" v-model="data.color">
              <option v-for="variant in product.variants" :key="variant.id" :value="variant.color">
                {{variant.color}}
              </option>
            </select>
          </div>
        </div>
        <div v-if="sizes.length > 0">
          <div class="text-xs uppercase text-gray-800 font-bold">
            Select a size:
          </div>
          <div class="flex">
            <div v-for="size in sizes" :key="size" class="mr-4">
              <input :id="`size-${size}`" v-model="data.size" class="mr-1" type="radio" name="size" :value="size">
              <label :for="`size-${size}`" class="text-gray-800 font-bold">{{ size }}</label>
            </div>
          </div>
        </div>
      </div>
      <button type="button" @click="addToCart()" class="mt-4 h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
        Add to Cart
      </button>
      <p :class="success ? 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative': 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'" v-show="msg"> 
        {{msg}}
      </p>
    </div>
  </div>
</template>
<script setup>
  import { useRoute } from "vue-router";
  import HttpClient from '~/api/api-service'
import { useCartStore } from "~~/store/cart";
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const req = new HttpClient(runtimeConfig.public.apiBase, runtimeConfig.public.apiKey);
  const { data: product } = await useAsyncData('getProduct', () => req.getProductById(route.params.id))
  const selectedImage = ref(product.value.images[0]);
  const success = ref(false);
  const msg = ref();
  function showImage(img) {
    selectedImage.value = img;
  }
  const sizes = computed( () => {
    if(data.color === null){
      return [];
    }

    const variant = product.value.variants.find(variant => variant.color === data.color);
    return variant.available_sizes.split(', ');
  })

  const data = reactive({
    id: route.params.id,
    title: product.value.title,
    images: selectedImage.value,
    price: product.value.price,
    color: null,
    size: null
  })
  function addToCart() {
    if(data.color == null || data.size ==null) {
      msg.value = "Please select the color and size first!"
    }else {
      success.value = true;
      msg.value = "The product was successfully added to the cart!"
      const cartStore = useCartStore();
      cartStore.addToCart(data);

    }
  }
</script>
