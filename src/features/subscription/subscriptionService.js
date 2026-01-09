import axios from 'axios'


const subscribe = async(data)=>{
    const response = await axios.post('https://573e523cb374.ngrok-free.app/api/subscribe', data)

    return response.data
}

const subscriptionService = {
    subscribe,
}

export default subscriptionService