import { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { subscribe, reset } from '../features/subscription/subscrptionSlice'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './Loader'

function Footer() {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const { isError, isLoading, isSuccess, message } = useSelector((state) => {
        return state.subscribe
    })

    useEffect(() => {
        if (isError) {
            toast.error(message)
            setEmail('')
        }

        if (isSuccess) {
            toast.success(message)
            setEmail('')
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
            <footer className="w-full border-t border-b border-gray-200 py-10 px-6 bg-white">
                <div className="footerOptions flex flex-col md:flex-row md:justify-between gap-10 mb-8">
                    <div className="quick-links flex flex-col gap-2">
                        <p className="text-lg font-bold text-gray-800 mb-2">Quick links</p>
                        <Link to='/search' className="text-purple-600 hover:underline">Search</Link>
                    </div>
                    <div className="quick-links flex flex-col gap-2">
                        <p className="text-lg font-bold text-gray-800 mb-2">Info</p>
                        <Link to='/search' className="text-purple-600 hover:underline">Search</Link>
                    </div>
                    <div className="quick-links flex flex-col gap-2">
                        <p className="text-lg font-bold text-gray-800 mb-2">Our mission</p>
                        <span className="tracking-wide text-gray-600">
                            Share contact information, store details, and <br /> brand content with your customers.
                        </span>
                    </div>
                </div>
                <div className="email-subcription flex flex-col gap-3">
                    <p className="font-semibold text-gray-800">Subscribe to our emails</p>
                    <form onSubmit={onSubmit} className="w-full max-w-md">
                        <div className="footer-form-group flex items-center relative w-full">
                            <input
                                type="email"
                                name='email'
                                id='emails'
                                placeholder='Email'
                                value={email}
                                onChange={onChange}
                                className="p-3 pr-12 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-400 text-base bg-gray-100"
                            />
                            <button disabled={isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800 focus:outline-none">
                                {isLoading ? <Loader /> : <FaArrowRight />}
                            </button>
                        </div>
                    </form>
                </div>
            </footer>
            <div className="copyright py-6 flex justify-center items-center bg-gray-50 text-gray-500 text-sm">
                <p>@2022 Jibona Odunayo | Shopify Clone</p>
            </div>
            <ToastContainer />
        </>
    )
}

export default Footer