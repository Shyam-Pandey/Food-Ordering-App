import React from 'react'
import { useSelector } from 'react-redux'

import ItemsAccordianCard from './ItemsAccordianCard'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems)
    let price = cartItems.map((itemvalue) => itemvalue.card.info.price)
    let total = price.reduce((acc, curr) => acc + curr, 0)
    return (
        <div>
            <h1 className='text-center mt-11 font-bold text-5xl'>My Cart</h1>
            <div className=' mx-52 py-28 px-24'>
                {
                    cartItems.map((itemvalue) => (
                        <ItemsAccordianCard key={itemvalue.card.info.id} itemvalue={itemvalue} />
                    ))
                }
            </div>
            <div>{`Total${total / 100}`}</div>
        </div>
    )
}

export default Cart