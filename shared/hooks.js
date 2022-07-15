import { onUnmounted } from 'vue'
import { useCartStore } from '../store/cart'
export const CART_STORAGE = 'CART_STORAGE'
export const usePersistCart = () => {
   const cartStore = useCartStore()
   const localStorageInstace = cartStore.$subscribe(() => {
      localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.contents))
   })
   onUnmounted(() => {
      localStorageInstace()
   })
}