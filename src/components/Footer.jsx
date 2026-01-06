import { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { subscribe, reset } from '../features/subscription/subscrptionSlice'
import 'react-toastify/dist/ReactToastify.css'

function Footer() {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const { isError, isLoading, isSuccess, message } = useSelector((state) => {
        return state.subscribe
    })

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            toast.success(message)
        }

        dispatch(reset())

    }, [isError, isSuccess, email, message, dispatch])

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(subscribe({
            email: email
        }))
    }

    return (
        <>
            <footer>
                <div className="footerOptions">
                    <div className="quick-links">
                        <p style={{fontSize : 20}}>Quick links</p>
                        <Link to='/search'>Search</Link>
                    </div>
                    
                    <div className="quick-links">
                        <p style={{fontSize : 20}}>Info</p>
                        <Link to='/search'>Search</Link>
                    </div>

                    <div className="quick-links">
                        <p style={{fontSize : 20}}>Our mission</p>
                        <span className='letterSpacing'>
                        Share contact information, store details, and <br /> brand content with your customers.
                        </span>
                    </div>

                </div>
                <div className="email-subcription">
                    <p>Subscribe to our emails</p>
                    <form onSubmit={onSubmit}>
                        <div className="footer-form-group">
                            <input type="email" name='email' id='emails' placeholder='Email' value={email} onChange={onChange} />
                            <button>
                                <FaArrowRight />
                            </button>
                        </div>
                    </form>
                </div>
            </footer>
            <div className="copyright">
                <p>@2022 Jibona Odunayo| Shopify Clone</p>
            </div>
            <ToastContainer />
        </>
    )
}

export default Footer