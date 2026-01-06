import axios from 'axios'

const subscribe = async(data)=>{
    const response = await axios.post('/api/subscribe', data)

    return response.data
}

const subscriptionService = {
    subscribe,
}

export default subscriptionService