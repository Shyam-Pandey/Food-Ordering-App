import React from 'react'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
import { RESTAURANT_MENU_LOGO } from '../utils/constants'

const ItemsAccordianCard = ({ itemvalue }) => {
    const dispatch = useDispatch();
    const addHandeler = (itemvalue) => {
        dispatch(addItem(itemvalue))
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
                    <button
                        className=' w-10 h-5 ml-3 text-xs  sm:w-20 sm:h-9 bg-green-100 sm:ml-5 absolute  rounded-sm cursor-pointer'
                        onClick={() => addHandeler(itemvalue)}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className='w-[100%] border-[1px] border-b border-gray-300 mt-5' />
        </div>
    )
}

export default ItemsAccordianCard