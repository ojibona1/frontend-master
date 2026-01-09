import axios from "axios";

const getAllProducts =  async(data) => {
    const response = await axios.post('https://573e523cb374.ngrok-free.app/api/products', data);
    return response.data;
};

const productsService = {
    getAllProducts
}

export default productsService