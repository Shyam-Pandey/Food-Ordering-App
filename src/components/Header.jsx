import React, { useContext } from 'react'
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
    // const { isVisible, setIsVisible, handleVisible } = useContext(VisibleOrInvisible)
    const cartItems = useSelector((state) => state.cart.items)
    const isOnline = useOnlineStatus()
    const user = useSelector((state) => state.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    return (
        <>
            <header className='flex justify-between items-center text-center p-1 sm:p-4 fixed top-0 left-0 z-50 w-[100%]
                text-xs sm:text-[15px] bg-white text-orange-500 shadow-lg font-poppins font-medium'>
                <img src={LOGO} className='w-8 sm:w-11' alt="logo" />
                <ul className='flex justify-center items-center gap-1' >
                    <li className='flex mt-1 sm:mt-2' >
                        {isOnline ?
                            <img src={green_icon} alt="online" className='w-3 h-3' /> :
                            <img src={red_icon} alt="offline" className='w-3 h-3' />
                        }
                    </li>
                    <li >
                        <Link to="/" style={{ textDecoration: 'none', }} className=' hover:text-white  hover:bg-orange-400  hover:rounded-md p-2 hover:scale-50 bg-cover' > Home </Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ textDecoration: 'none' }} className=' hover:text-white  hover:bg-orange-400  hover:rounded-md p-2 hover:scale-50 bg-cover'>About</Link>
                    </li>
                    <Link to="/contact" style={{ textDecoration: 'none' }} className=' hover:text-white  hover:bg-orange-400  hover:rounded-md p-3 hover:scale-95 bg-cover'>Contact</Link>
                    <li>
                        <Link to="/cart" style={{ textDecoration: 'none' }} className=' hover:text-white  hover:bg-orange-400  hover:rounded-md p-2 hover:scale-50 bg-cover'>
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            <sup className='text-sm'>{
                                cartItems.length === 0 ? "" : `${cartItems.length}`
                            }</sup>
                        </Link>
                    </li>

                    {(user === null)
                        ? (<li  >
                            <Link to="/login" style={{ textDecoration: 'none' }} className=' hover:text-white  hover:bg-orange-400 hover:rounded-md p-2 hover:scale-50 bg-cover'>
                                {isLoggedIn ? "Signin" : "Sign up"}
                            </Link>
                        </li>)
                        : <button onClick={handleSignOut}>Logout</button>
                    }

                </ul>
            </header>
        </>
    )
}

export default Header

