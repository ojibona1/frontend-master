import axios from "axios";

const getCart = async (data) =>{
    const response = await axios.post('https://573e523cb374.ngrok-free.app/api/user/cart', data)
    return response.data;
}

const addToCart = async (data) => {
    const response = await axios.post('https://573e523cb374.ngrok-free.app/api/user/addtocart', data)
    return response.data;
}

const removeFromCart = async (data) => {
    const response = await axios.post('https://573e523cb374.ngrok-free.app/api/user/removefromcart', data)
    return response.data;
}

const deleteCart = async (data) => {
    const response = await axios.post('https://573e523cb374.ngrok-free.app/api/user/deletecart', data)
    return response.data;
}

export const cartServive = {
    getCart,
    addToCart,
    removeFromCart,
    deleteCart
}