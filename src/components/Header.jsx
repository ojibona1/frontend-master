import React, { useState } from 'react'
import Welcome from './Welcome'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaSearch, FaShoppingBag, FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../features/auth/authSlice'
import { ToastContainer } from 'react-toastify'

function Header() {

  const { user } = useSelector((state) => {
    return state.auth;
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onLogOut = () => {
    dispatch(logout())

    setTimeout(() => {
      navigate('login')
    }, 200)
  }
  return (
    <>
      <Welcome />
      <header className="bg-white shadow-md w-full sticky top-0 z-20 border-b border-gray-200">
        <ul className="flex items-center justify-start py-4 w-full">
          <span className="font-bold text-2xl text-gray-900 tracking-wide">LOGO</span>
          <div className="hidden md:flex gap-10 text-gray-700 font-semibold">
            <Link to='/' className={`hover:text-purple-600 transition-colors duration-200 ${location.pathname === '/' ? 'text-purple-600' : ''}`}>Home</Link>
            <Link to='/catalog' className={`hover:text-purple-600 transition-colors duration-200 ${location.pathname === '/catalog' ? 'text-purple-600' : ''}`}>Catalog</Link>
            <Link to='/contact' className={`hover:text-purple-600 transition-colors duration-200 ${location.pathname === '/contact' ? 'text-purple-600' : ''}`}>Contact</Link>
          </div>

          {/* Mobile menu modal */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" onClick={() => setMobileMenuOpen(false)}></div>
              {/* Slide-in menu */}
              <nav className="relative bg-white shadow-xl w-[50%] h-full p-8 flex flex-col gap-8 animate-slide-in-right rounded-r-2xl">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="block w-7 h-1 bg-gray-800 rounded rotate-45 translate-y-1"></span>
                  <span className="block w-7 h-1 bg-gray-800 rounded -rotate-45 -translate-y-1"></span>
                </button>
                <ul className="flex flex-col gap-8 justify-center items-start mt-10 text-xl font-semibold text-gray-700">
                  <li>
                    <Link to='/' onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600 transition-colors duration-200">Home</Link>
                  </li>
                  <li>
                    <Link to='/catalog' onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600 transition-colors duration-200">Catalog</Link>
                  </li>
                  <li>
                    <Link to='/contact' onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600 transition-colors duration-200">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </ul>
        <ul className="flex items-center gap-8 px-6 pb-2 md:pb-0">
          <li>
            <Link to='/search' className="p-2">
              <FaSearch color={location.pathname === '/search' ? 'purple' : 'black'}/>
            </Link>
          </li>
          <li>
            <Link to='/cart' className="p-2">
              <FaShoppingBag color={location.pathname === '/cart' ? 'purple' : 'black'} />
            </Link>
          </li>
          {
            !user && (
              <li>
                <Link to='/login' className="p-2">
                  <FaUserAlt color={location.pathname === '/login' ? 'purple' : 'black'} />
                </Link>
              </li>
            )
          }
          {user && (
            <li>
              <button onClick={onLogOut} className="p-2">
                <FaSignOutAlt color='black'/>
              </button>
            </li>
          )}

          <div className="md:hidden flex items-center">
            {!mobileMenuOpen && (
              <button
                className="flex flex-col gap-1 p-2 focus:outline-none hover:bg-gray-100 rounded"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-2 h-[3px] bg-gray-800 rounded"></span>
                <span className="block w-4 h-[3px] bg-gray-800 rounded"></span>
                <span className="block w-6 h-[3px] bg-gray-800 rounded"></span>
              </button>
            )}
          </div>
        </ul>
      </header>
      <ToastContainer />
    </>
  )
}

export default Header
