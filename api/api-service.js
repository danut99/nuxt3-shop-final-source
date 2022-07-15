export default class HttpClient {
    constructor(baseURL, key){
        this.key = key;
        this.baseURL = baseURL;
        this.headers = {
            'X-Api-Key': this.key,
            "Content-type": "application/json; charset=UTF-8"
        }
        
    }

    async getProductById(productId){
        const data = await $fetch(`${this.baseURL}products/${productId}/`,{ headers:this.headers, params: { expand: 'variants' } });
        return data;
    }

    async createOrder(productIds, description, lastName, email){
        return  await $fetch(`${this.baseURL}orders/`,{
            headers:this.headers,
            method: "POST",
            body: {
              products: productIds,
              description,
              customer_name: lastName,
              customer_email: email,
            }
        });
    }

    async getOrders() {
        const data = await $fetch(`${this.baseURL}orders/`,{ headers:this.headers });
        return data;
    }

}