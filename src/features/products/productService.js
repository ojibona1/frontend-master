import axios from "axios";

const getAllProducts =  async(data) => {
    const response = await axios.post('https://10cbd5846fa7.ngrok-free.app/api/products', data);
    return response.data;
};

const productsService = {
    getAllProducts
}

export default productsService