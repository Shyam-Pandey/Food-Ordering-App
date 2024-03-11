import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Body from './Body'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ udi: uid, email: email, displayName: displayName }));

            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });
    }, [])
    return (
        <div className=''>
            <Body />
        </div>
    )
}
export default Home
