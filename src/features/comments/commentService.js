import axios from 'axios'

const sendComment = async(data)=>{

    const response = await axios.post('https://10cbd5846fa7.ngrok-free.app/api/comment', data)

    return response.data
}

const commentService = {
    sendComment
}

export default commentService