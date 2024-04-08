import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Pages
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Error from './components/Error'
import Header from './components/Header'
import RestaurantMenu from './components/RestaurantMenu'
import Cart from './components/Cart'
import store from './utils/store'
import Login from './components/Login'
import Contact from './components/Contact'


export const SigninSinoutContext = createContext(null) // creates a context object.

const App = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const handleVisible = () => {
    setIsVisible((isVisible) => !isVisible)
    // console.log("Clicked me")
  }
  return (
    <Provider store={store}>
      <SigninSinoutContext.Provider value={{ isLoggedIn, setIsloggedIn }}>
        <Header isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </SigninSinoutContext.Provider>
    </Provider>
  )
}

export default App
library.add(fab, fas, far)