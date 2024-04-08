import React, { useRef, useState, useContext } from 'react';
import { emailPasswordValidation } from '../utils/emailPasswordValidation.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom';
import { SigninSinoutContext } from '../App'


const Login = () => {
    const { isLoggedIn, setIsloggedIn } = useContext(SigninSinoutContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleLoginToggle = () => {
        setIsloggedIn((isLoggedIn) => !isLoggedIn)
    }

    const handleLogin = () => {
        const res = emailPasswordValidation(email.current.value, password.current.value);
        setError(res)
        if (error) return;

        if (!isLoggedIn) {
            // const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setError(errorMessage + " " + errorCode)
                });
            navigate("/")

        } else {
            // Log in the user here
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage + " " + errorCode)
                });
            navigate("/")
        }

    }
    return (
        <form action="" onSubmit={(e) => e.preventDefault()} className='w-full h-svh flex justify-center items-center' style={{
            background: "#FF8008", background: "-webkit-linear-gradient(to right, #FFC837, #FF8008)",
            background: "linear-gradient(to right, #FFC837, #FF8008)"
        }}>
            <main className='flex flex-col justify-center items-center w-[22rem] h-[23rem] text-white bg-white mt-32 rounded-md '>
                <h1 className='sm:text-4xl  font-bold  text-orange-500 mb-5'> {isLoggedIn ? "Sign In" : "Sign up"}</h1>
                {!isLoggedIn &&
                    <input
                        ref={fullName}
                        type="text"
                        name="fullName"
                        placeholder='Full Name'
                        className='w-[80%] h-10 rounded-lg border-2 border-orange-500 p-2 m-3 outline-none text-black'

                    />}
                <input
                    ref={email}
                    type="email"
                    name="email"
                    placeholder='Email'
                    className='w-[80%] h-10 rounded-lg border-2 border-orange-500  p-2 m-3 outline-none text-black'
                />

                <input
                    ref={password}
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className='w-[80%] h-10 rounded-lg border-2 border-orange-500  p-2 m-3 outline-none text-black'
                />
                <p className='text-xs text-red-500 -ml-32'>{error}</p>
                <button
                    onClick={handleLogin}
                    className='w-[80%] h-10 rounded-lg m-3 bg-[#0C63E7]'
                >
                    {isLoggedIn ? "Sign In" : "Sign Up"}
                </button>
                <p onClick={handleLoginToggle} className='text-gray-500 ml-0' >{isLoggedIn ? "New User? Sign up now" : "Existing user? Sign In"}</p>
            </main>
        </form>
    )
}

export default Login;