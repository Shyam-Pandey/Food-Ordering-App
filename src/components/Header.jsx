import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";

import { LOGO } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import green_icon from '../constants/button.png'
import red_icon from '../constants/red_button.png'
import { SigninSinoutContext } from '../App'
import { auth } from '../utils/firebase'


const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn, setIsloggedIn } = useContext(SigninSinoutContext)
    const [isLogout, setisLogout] = useState(false);
    const cartItems = useSelector((state) => state.cart.items)
    const isOnline = useOnlineStatus()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/about")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
        setisLogout((isLogout) => !isLogout)
    }

    return (
        <div className='flex justify-between text-center items-center shadow-lg p-3 bg-green-100 sticky '>
            <img src={LOGO} className='w-16' alt="logo" />
            <ul className='flex gap-5' >
                <li className='flex mt-2' >
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

                <li>
                    <Link to="/login" style={{ textDecoration: 'none' }}> {
                        (isLoggedIn && !isLogout)
                            ? "Sign In"
                            : "Sign Up"
                    }
                    </Link>
                </li>

                {/* 
                {!isLoggedIn? (

                <Menu theme="dark" mode='horizontal' disabledOverflow='true'>
                    <Menu.Item><Link to='/login'>Log In</Link></Menu.Item>
                    <Menu.Item><Link to='signup'>Sign Up</Link></Menu.Item>
                </Menu>
            ) : (

                <Button className='logout' onClick={Logout}>Log out</Button>
            )}
                */}
                <li>
                    {
                        !isLoggedIn ? (
                            <span>
                                <Link to='/login'>Login</Link>
                                <Link to='/login' > Sign Up</Link>
                            </span>
                        ) : (
                            <button className='logout' onClick={handleSignOut}>Log out</button>
                        )
                    }
                </li>

                <li>
                    <Link to="/cart" style={{ textDecoration: 'none' }}> Cart {`(${cartItems.length})`} </Link>
                </li>

            </ul>
        </div>
    )
}

export default Header

