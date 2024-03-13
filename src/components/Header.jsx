import React, { useState, useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LOGO } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import green_icon from '../constants/button.png'
import red_icon from '../constants/red_button.png'
import { SigninSinoutContext } from '../App'
import { auth } from '../utils/firebase'


const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn, setIsloggedIn } = useContext(SigninSinoutContext)
    const cartItems = useSelector((state) => state.cart.items)
    const isOnline = useOnlineStatus()
    const user = useSelector((state) => state.user)
    console.log(user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/about")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    return (
        <header className='flex justify-between text-center items-center shadow-lg p-1 sm:p-3 bg-green-100 text-xs sm:text-sm'>
            <img src={LOGO} className='w-8 sm:w-16' alt="logo" />
            <ul className='flex gap-2 sm:gap-5' >
                <li className='flex mt-1 sm:mt-2' >
                    {isOnline ?
                        <img src={green_icon} alt="online" className='w-3 h-3' /> :
                        <img src={red_icon} alt="offline" className='w-3 h-3' />
                    }
                </li>
                <li >
                    <Link to="/" style={{ textDecoration: 'none' }} > Home </Link>
                </li>
                <li>
                    <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
                </li>
                <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link>

                {(user === null)
                    ? (<li>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            {isLoggedIn ? "Signin" : "Sign up"}
                        </Link>
                    </li>)
                    : <button onClick={handleSignOut}>Logout</button>
                }
                <li>
                    <Link to="/cart" style={{ textDecoration: 'none' }}> Cart {`(${cartItems.length})`} </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

