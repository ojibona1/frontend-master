import axios from 'axios'
import uri from '../config'

const regUser = async (data)=>{
    const response = await axios.post(`${uri}/api/user`, data)

    if(response.data){
        localStorage.setItem('shopifyeco-user', JSON.stringify(response.data))
    }

    return response.data
}

const loginUser =async (data)=>{
    const response = await axios.post(`${uri}/api/user/login`, data)

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