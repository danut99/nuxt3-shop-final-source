<template>
  <div>
    <navigation-bar />
    <div> 
      <slot /> 
    </div>
  </div>
</template>
<script setup>
  import { usePersistCart } from '../shared/hooks';
  import { useCartStore } from "../store/cart";
	const cartStore = useCartStore();
	onMounted(() => {
		cartStore.loadCartInstance();
	});
  usePersistCart();

</script>