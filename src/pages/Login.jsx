import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import { useEffect } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'


function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData
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
    dispatch(login(formData))
    navigate('/login')
  }

  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input type="email" name="email" id="email" className="form-control" value={email} placeholder='Enter Email' autoComplete='off' onChange={onChange} />
          <input type="password" name="password" id="password" className="form-control" value={password} placeholder='Enter Password' autoComplete='off' onChange={onChange} />
        </div>
        <div className="form-group">
          <button type='submit'>Submit</button>
        </div>
        <div className="form-message">
          <p>Create Account |</p>
          <Link to='/register'>Register</Link>
        </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Login