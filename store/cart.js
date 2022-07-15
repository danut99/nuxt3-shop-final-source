import { defineStore } from 'pinia'
import { CART_STORAGE } from '../shared/hooks'


export const useCartStore = defineStore('cartStore', {

    state: () => ( {
        contents: {}
    }),
    getters: {
        formattedCart() {
            if(this.contents) {
                return Object.keys(this.contents).map(productId => {
                    const purchase = this.contents[productId];
                    return {
                        id: purchase.data.id,
                        image: purchase.data.images,
                        title: purchase.data.title,
                        quantity: purchase.quantity,
                        price: purchase.data.price,
                        cost: purchase.quantity * purchase.data.price
                    }

                })
            }
        },
        total() {
            if(this.contents) {
                return Object.keys(this.contents).reduce((acc, id) => {
                    return acc + this.contents[id].data.price * this.contents[id].quantity;
                },0)
            }
            return 0;
        },

        count() {
            if(this.contents) {
                return Object.keys(this.contents).reduce((acc, id) => {
                    return acc + this.contents[id].quantity
                }, 0)
            }
            return 0;
        }

    },
    actions: {
        loadCartInstance() {
            if(localStorage.getItem(CART_STORAGE)) this.contents = JSON.parse(localStorage.getItem(CART_STORAGE));
        },

        addToCart(data) {
            if(this.contents[data.id]){
                this.contents[data.id].quantity += 1;
            }else {
                this.contents[data.id] = {
                    data,
                    quantity: 1
                }
            }
            setTimeout(() => {
                window.location = "/cart"
            }, 1000);
            
        },
        incrementQuantity(productId) {
            if(this.contents[productId]){
                this.contents[productId].quantity += 1;
            }
        },
        decrementQuantity(productId) {
            if(this.contents[productId] && this.contents[productId].quantity > 1) {
                this.contents[productId].quantity -= 1;
            }
        },
        removeFromCart(productId) {
            if(this.contents[productId]){
                delete this.contents[productId];
            }
        },
        clearLocalStorage() {
            localStorage.clear();
            this.contents = {};
        }

    }

})
