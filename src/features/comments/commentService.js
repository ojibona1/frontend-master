import axios from 'axios'

const sendComment = async(data)=>{

    const response = await axios.post('https://573e523cb374.ngrok-free.app/api/comment', data)

    return response.data
}

const commentService = {
    sendComment
}

export default commentService