<template>
    <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
            <div class="flex flex-col md:w-full">
                <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                </h2>
                <form class="justify-center w-full mx-auto" method="post" action>
                    <div class="">
                        <div class="space-x-0 lg:flex lg:space-x-4">
                            <div class="w-full lg:w-1/2">
                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                    Name</label>
                                <input name="firstName" type="text" placeholder="First Name" v-model="firstName"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required>
                            </div>
                            <div class="w-full lg:w-1/2 ">
                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                    Name</label>
                                <input name="Last Name" type="text" placeholder="Last Name" v-model="lastName"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="w-full">
                                <label for="Email"
                                    class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                <input name="Last Name" type="text" placeholder="Email" v-model="email"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="w-full">
                                <label for="Address"
                                    class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                <textarea
                                    class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" v-model="address"
                                    name="Address" cols="20" rows="4" placeholder="Address" required></textarea>
                            </div>
                        </div>
                        <div class="space-x-0 lg:flex lg:space-x-4">
                            <div class="w-full lg:w-1/2">
                                <label for="city"
                                    class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                <input name="city" type="text" placeholder="City" v-model="city"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 " required>
                            </div>
                            <div class="w-full lg:w-1/2 ">
                                <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                    Postcode</label>
                                <input name="postcode" type="text" placeholder="Post Code" v-model="postalCode"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button
                                class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" @click.prevent="checkout" >Process
                            </button>
                            <p :class="success ? 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative': 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'" v-show="msg"> {{msg}}</p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                <div class="pt-12 md:pt-0 2xl:ps-4">
                    <h2 class="text-xl font-bold">
                        Order Summary
                    </h2>
                    <div class="mt-8">
                        <div class="flex flex-col space-y-4" v-for="product in formattedCart" :key="product.data">
                            <div class="flex space-x-4 my-2">
                                <div>
                                    <img :src="`${product.image}`" alt="image" class="w-20">
                                </div>
                                <div>
                                    <h2 class="text-xl font-bold">{{product.title}}</h2>
                                    <span class="text-center w-1/5 font-semibold text-sm"> PRICE: <span> ${{product.price}} </span></span><br>
                                    <span class="text-center w-1/5 font-semibold text-sm"> QUANTITY: <span>{{product.quantity}}</span></span><br>
                                    <span class="text-center w-1/5 font-semibold text-sm"> COST: <span> {{product.cost}} </span></span><br>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex items-center font-bold w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span class="ml-2">{{total}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import HttpClient from '~/api/api-service'
    import { useCartStore } from "../../store/cart";
    const msg = ref();
    const success = ref(false);
    const firstName = ref();
    const lastName = ref();
    const postalCode = ref();
    const address = ref();
    const email = ref();
    const city = ref();
    const router = useRouter();
    const cartStore = useCartStore();
    const { formattedCart, total } = toRefs(cartStore);
    const runtimeConfig = useRuntimeConfig();
    const checkoutProducts = async () => {
        let productIds = [];
        let description = '';
        for(const cartProduct of formattedCart.value) {
            productIds.push(cartProduct.id);
            description += `[${cartProduct.title}: price: ${cartProduct.price}, quantity:${cartProduct.quantity}, Cost:${cartProduct.cost}] Total: ${total.value}`;
        }
        const req = new HttpClient(runtimeConfig.public.apiBase, runtimeConfig.public.apiKey);
        await useAsyncData('createOrder', () => req.createOrder(productIds, description, lastName.value, email.value));
        localStorage.clear();
        setTimeout(() => {
            router.push('/orders');
        }, 1000);
    }
    
    const checkout = () => {
        if(firstName.value == undefined || lastName.value == undefined || postalCode.value == undefined || address.value == undefined || email.value == undefined || city.value == undefined){
             msg.value = "Please fill in all fields completely and correctly"

        }else{
            msg.value = "Your purchase made our day…. We hope that it makes your day too! Thank you for your order."
            success.value = true;
            checkoutProducts();
        }

    }

</script>