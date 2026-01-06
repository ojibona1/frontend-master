import React, {useEffect} from 'react'
import Welcome from './Welcome'
import { Link } from 'react-router-dom'
import {FaSearch, FaShoppingBag, FaUserAlt, FaSignOutAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'

import {logout} from '../features/auth/authSlice'

function Header() {

  const {user} = useSelector((state)=>{
    return state.auth
  })

  const dispatch = useDispatch()


  const onLogOut =()=>{
    dispatch(logout())
  }
  return (
    <>
      <Welcome />
      <header>
        <ul>
          <li className='logo-text'>LOGO</li>
          <div className="header-list-large">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='catalog'>Catalog</Link>
          </li>
          <li>
            <Link to='contact'>Contact</Link>
          </li>
          </div>
          <div className="header-list-small-button">
            <div className='hamburger-open' onClick={(e)=>{
            document.querySelector('.hamburger-open').style.display = 'none'
            document.querySelector('.header-list-small-modal').style.left = '0'
            document.querySelector('.hamburger-close').style.display = 'flex'

          }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="hamburger-close" onClick={(e)=>{
            document.querySelector('.hamburger-close').style.display = 'none'
            document.querySelector('.header-list-small-modal').style.left = '-400px'
            document.querySelector('.hamburger-open').style.display = 'flex'

          }}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='header-list-small-modal'>
            <ul>
            <li>
            <Link to='/' onClick={()=>{
              document.querySelector('.hamburger-close').click()
            }}>Home</Link>
          </li>
          <li>
            <Link to='/catalog' onClick={()=>{
              document.querySelector('.hamburger-close').click()
            }}>Catalog</Link>
          </li>
          <li>
            <Link to='/contact' onClick={()=>{
              document.querySelector('.hamburger-close').click()
            }}>Contact</Link>
          </li>
            </ul>
          </div>
        </ul>

        <ul>
          <li>
            <button>
            <FaSearch/>
            </button>
          </li>
          <li>
            <Link to='/cart'>
            <FaShoppingBag/>
            </Link>
          </li>
          {
            !user && (
              <li>
              <Link to='/login'>
              <FaUserAlt/>
              </Link>
            </li>
            )
          }
          <li>
          { user && (
          <li>
            <button onClick={onLogOut}>
              <FaSignOutAlt/>
            </button>
          </li>
          )}
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header