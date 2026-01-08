import axios from 'axios'

const subscribe = async(data)=>{
    const response = await axios.post('https://10cbd5846fa7.ngrok-free.app/api/subscribe', data)

    return response.data
}

const subscriptionService = {
    subscribe,
}

export default subscriptionService