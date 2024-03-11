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
                <div className='w-[70%]'>
                    <h1 className='text-black text-lg font-medium'>{data?.name}</h1>
                    <h5 className='text-sm mt-1 text-black'>{`${data?.price / 100} Rs.`}</h5>
                    <p className='text-sm mt-5 text-gray-400'>{data?.description}</p>
                </div>
                <div className='flex flex-col gap-2 justify-end  '>
                    <img className='w-28 h-24 rounded-xl relative' src={RESTAURANT_MENU_LOGO + data?.imageId} alt="logo" />
                    <button
                        className='w-20 h-9 bg-green-100 ml-5 absolute '
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