import axios from 'axios'

const regUser = async (data)=>{
    const response = await axios.post('https://10cbd5846fa7.ngrok-free.app/api/user', data)

    if(response.data){
        localStorage.setItem('shopifyeco-user', JSON.stringify(response.data))
    }

    return response.data
}

const loginUser =async (data)=>{
    const response = await axios.post('https://10cbd5846fa7.ngrok-free.app/api/user/login', data)

    if(response.data){
        localStorage.setItem('shopifyeco-user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = ()=> {
    localStorage.removeItem('shopifyeco-user')
}

const authService = {
    regUser,
    loginUser,
    logout
}

export default authService