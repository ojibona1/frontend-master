import axios from "axios";
import uri from "../config";

const getAllProducts =  async(data) => {
    const response = await axios.post(`${uri}/api/products`, data);
    return response.data;
};

const productsService = {
    getAllProducts
}

export default productsService