import React, { useEffect } from 'react'
import { addItem, removeItem } from '../utils/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RESTAURANT_MENU_LOGO } from '../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ItemsAccordianCard = ({ itemvalue }) => {
    const cartItems = useSelector((state) => state?.cart?.items?.length);
    const dispatch = useDispatch();
    const addHandeler = (itemvalue) => {
        dispatch(addItem(itemvalue))
    }

    const removeHandeler = (itemvalue) => {
        dispatch(removeItem(itemvalue))
    }
    let data = itemvalue?.card?.info;
    return (
        <div className=''>
            <div className='flex justify-between mt-3'>
                <div className=' w-[78%] sm:w-[70%] md:w-[100%] ml-3'>
                    <h1 className='text-black sm:text-lg sm:font-medium '>{data?.name}</h1>
                    <h5 className='sm:text-sm mt-1 text-black'>{`${data?.price / 100} Rs.`}</h5>
                    <p className='sm:text-sm mt-5 text-gray-400 text-[10px] w-[100%]'>{data?.description}</p>
                </div>
                <div className='flex flex-col gap-2 justify-end w-[20%]  '>
                    <img className=' w-16 h-12 sm:w-28 sm:h-24 rounded-xl relative' src={RESTAURANT_MENU_LOGO + data?.imageId} alt="logo" />
                    <span className='flex justify-center items-center gap-4 absolute  w-20 h-9 bg-[#0C63E7] font-bold text-sm text-white ml-3 sm:ml-5 rounded-md cursor-pointer'>
                        {/* <span>{cartItems}</span> */}
                        <button
                            onClick={() => addHandeler(itemvalue)}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-plus" />
                        </button>
                        <button
                            onClick={() => removeHandeler(itemvalue)}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-minus" />
                        </button>
                    </span>
                </div>
            </div>
            <div className='w-[100%] border-[1px] border-b border-gray-300 mt-5' />
        </div>
    )
}

export default ItemsAccordianCard

{/* <button
className=' w-3 h-3 ml-3 text-xs font-bold  sm:w-20 sm:h-9 bg-[#e7550c] text-white sm:ml-5 rounded-lg cursor-pointer'
onClick={() => removeHandeler(itemvalue)}
>
-
</button> */}