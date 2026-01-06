import axios from 'axios'

const regUser =async (data)=>{
    const response = await axios.post('/api/user', data)

    if(response.data){
        localStorage.setItem('eco-user', JSON.stringify(response.data))
    }

    return response.data
}

const loginUser =async (data)=>{
    const response = await axios.post('/api/user/login', data)

    if(response.data){
        localStorage.setItem('eco-user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = ()=> {
    localStorage.removeItem('user')
}

const authService = {
    regUser,
    loginUser,
    logout
}

export default authService