import axios from 'axios';

const FakeStoreApi = {
    fetchAllProducts: async () => {
        const result = await axios.get('http://localhost:4000/products');
        // const result = res.json();
        console.log(result.data.data);
        return result.data.data;
    },
    fetchProductById: async (productId) => {
        const result = await axios.get(`http://localhost:4000/products/${productId}`)
        // const result = await res.json()
        console.log(result);
        return result.data.data
    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await axios.get('http://localhost:4000/products');
        const result = res.data.data;
        return result.filter((product) => product.title.toLowerCase().includes(query))
    },
}

export { FakeStoreApi }