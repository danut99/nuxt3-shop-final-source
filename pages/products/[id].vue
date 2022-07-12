<template>
  <div class="w-full flex">
    <div class="product-gallery w-1/2 m-20 flex flex-col justify-center items-center ">
      <div class="rounded-lg shadow-md">
        <img src="https://api.apisful.com/v1/files/9WpdQW5/0cf894bbc8f2e0857388396dc48972f9/asa.png?width=400" alt="LeBron James T-shirt">
      </div>
      <div class="product-gallery__thumbs flex ">
        <div  class="mt-10 mx-3 cursor-pointer">
          <img src="https://api.apisful.com/v1/files/9WpdQW5/0cf894bbc8f2e0857388396dc48972f9/asa.png?width=54" alt="LeBron James T-shirt">
        </div>
      </div>
    </div>
    <div class="w-1/2 m-20">
      <div class="mb-2 font-bold text-gray-800 text-2xl md:text-3xl">
        <h1>LeBron James T-shirt</h1>
      </div>
      <div class="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat ligula, non consectetur eros. Vivamus hendrerit posuere nisi nec convallis. Vivamus consectetur venenatis luctus. Cras in luctus sapien, ut sollicitudin ipsum. Mauris suscipit mauris id vestibulum elementum. Nunc pretium interdum luctus
      </div>
      <div>
        <div class="flex py-2  mt-4 mb-4 ">
          <span class="text-indigo-400 mr-1 mt-1">$</span>
          <span class="font-bold text-indigo-600 text-3xl">20</span>
        </div>
      </div>
      <div>
        <div class="mt-4 mb-4">
          <div class="field flex flex-col justify-start ">
            <label class="text-xs uppercase text-gray-800 tracking-wide font-bold">Select a color:</label>
            <select class="w-1/3 border border-gray-800">
              <option>
                red
              </option>
            </select>
          </div>
        </div>
        <div>
          <div class="text-xs uppercase text-gray-800 font-bold">
            Select a size:
          </div>
          <div class="flex">
            <div>
              <input :id="`size-XS`" class="mr-1" type="radio" name="size" value="XS">
              <label :for="`size-XS`" class="text-gray-800 font-bold">XS</label>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="mt-4 h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
        Add to Cart
      </button>
    </div>
  </div>
</template>
<script setup>

</script>
