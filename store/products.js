import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => ( {
        items: []
    }),
    actions: {
        async fetchProducts(urlPath, key) {
            const products = await $fetch(`${urlPath}products?expand=variants`, {
                method: 'GET',
                headers: {
                  'X-Api-Key': key
                }
            })
            this.items.push(...products.results)
            return this.items;
        }
    }
})