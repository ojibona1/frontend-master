import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import { useEffect } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

function Register() {
  const [formData, setFormData] = useState({
    name : '',
    email: '',
    password: '',
    password2 : '',
  })

  const {name, email, password, password2} = formData
  const {user, isError, message} = useSelector((state)=>{
    return state.auth
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => {
      return ({
        ...prevState,
        [e.target.name]: e.target.value
      })
    })
  }

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(user){
      navigate('/')
    }

    dispatch(reset())
    
  }, [message, isError, dispatch, user, navigate])

  const onSubmit =(e)=>{
    e.preventDefault()
    if(password !== password2){
      toast.error('Password does not Match')
    }else{
      dispatch(register(formData))
      navigate('/register')
    }
  }

  return (
    <div className='login-form'>
    <h2>Register</h2>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <input type="text" name="name" id="name" className="form-control" value={name} placeholder='Enter Name' autoComplete='off' onChange={onChange}/>
        <input type="email" name="email" id="email" className="form-control" value={email} placeholder='Enter Email' autoComplete='off' onChange={onChange} />
        <input type="password" name="password" id="password" className="form-control" value={password} placeholder='Enter Password' autoComplete='off' onChange={onChange} />
        <input type="password" name="password2" id="password2" className="form-control" value={password2} placeholder='Confirm Password' autoComplete='off' onChange={onChange}/>
      </div>
      <div className="form-group">
        <button type='submit'>Submit</button>
      </div>
      <div className="form-message">
        <p>Existing Account |</p>
        <Link to='/login'>Login</Link>
      </div>
    </form>
    <ToastContainer/>
  </div>
  )
}

export default Register