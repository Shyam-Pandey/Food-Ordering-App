import React from 'react'
import { useSelector } from 'react-redux'

import ItemsAccordianCard from './ItemsAccordianCard'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems)
    let price = cartItems.map((itemvalue) => itemvalue.card.info.price)
    let total = price.reduce((acc, curr) => acc + curr, 0)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=' mx-52 pt-28 px-24'>
                <h1 className=' text-center font-bold text-5xl'>My Cart</h1>
                {cartItems.length === 0 ?
                    <p className="text-gray-400 mt-10">Your shopping cart is empty.</p> : ""}
                {
                    cartItems.map((itemvalue) => (
                        <ItemsAccordianCard key={itemvalue?.card?.info?.id} itemvalue={itemvalue} />
                    ))
                }
            </div>
            <div className='w-[25rem] h-[10rem] m-10 bg-white border-2 shadow-lg rounded-xl text-gray-400'>
                <h2 className='text-center text-lg font-bold'>Bill Details</h2>
                <span className=' flex flex-col justify-around' >
                    <h3 className=' ml-10'>{`Item Total ${total / 100}`}</h3>
                    <h3 className=' ml-10'>{`Delivery Fee Rs ${cartItems.length === 0 ? 0 : 32}`}</h3>
                    <h3 className=' ml-10'>{`Platform fee Rs ${cartItems.length === 0 ? 0 : 3}`}</h3>
                    <h3 className=' ml-10'>{`GST and Restaurant Charges Rs ${cartItems.length === 0 ? 0 : 32}`}</h3>
                </span>

            </div>
        </div>
    )
}

export default Cart