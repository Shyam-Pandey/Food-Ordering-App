import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import ItemsAccordianCard from './ItemsAccordianCard'

const ItemsCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=''>
            <div>
                <div className='flex justify-between '>
                    <h2 className='text-gray-700 font-bold text-lg'>{item?.card?.card?.title} ({item?.card?.card?.itemCards?.length})</h2>
                    <button onClick={() => { setIsOpen((isOpen) => !isOpen) }} >
                        {isOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} className='text-gray-400' />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} className='text-gray-400' />
                        )}
                    </button>
                </div>
                <div className='w-[100%] h-4 bg-gray-200 mt-4 mb-4' ></div>
            </div>

            {
                isOpen ? (
                    item?.card?.card?.itemCards?.map((itemvalue) => (
                        <ItemsAccordianCard key={itemvalue?.card?.info?.id} itemvalue={itemvalue} />
                    ))) : null
            }
        </div>
    )
}

export default ItemsCard
