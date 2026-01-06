import { useState, useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {sendComment, reset} from '../features/comments/commentSlice'


function Contact() {

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    phone : '',
    comment : ''
  })

  const dispatch = useDispatch()

  const {name, email, phone, comment} = formData
  const {isError, isLoading, isSuccess, message} = useSelector((state)=>{
    return state.comment
  })
  
  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess){
      toast.success("comment sent")
    }

    dispatch(reset())
  }, [isError, message, dispatch, isSuccess])

  const onChange = (e)=>{
    setFormData((prevState)=>{
      return ({
        ...prevState,
        [e.target.name] : e.target.value
      })
    })
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    dispatch(sendComment(formData))
  }

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={onSubmit}>
      <div className="contact-form">
        <input type="text" placeholder='Name' name="name" id="name" autoComplete="off" value={name} onChange={onChange} required/>
        <input type="email" placeholder='Email' name="email" id="email" autoComplete="off" value={email} onChange={onChange} required/>
        <input type="tel" placeholder='Phone Number' name="phone" id="phone" autoComplete="off" value={phone} onChange={onChange} required/>
        <textarea type="text" placeholder='Comment' name="comment" id="comment" autoComplete="off" value={comment} onChange={onChange} required/>
        </div>
        <div className="contact-form-btn">
          <button type='submit'>Send</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Contact