import axios from 'axios'

const sendComment = async(data)=>{

    const response = await axios.post('/api/comment', data)

    return response.data
}

const commentService = {
    sendComment
}

export default commentService