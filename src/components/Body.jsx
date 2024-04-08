import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import RestaurantCard from './RestaurantCard'
import { RESTAURANT_LIST } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import Shimmer from './Shimmer'
import background from '../constants/pizza.jpg'


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchRestaurants, setSearchRestaurants] = useState("");

    const handleChange = (e) => {
        setSearchRestaurants(e.target.value);
    }

    const fetchData = async () => {
        // API call to get data here.
        console.log(RESTAURANT_LIST)
        const data = await fetch(RESTAURANT_LIST);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log(listOfRestaurants)
    useEffect(() => {
        fetchData();
    }, [])
    const isOnline = useOnlineStatus();
    if (isOnline === false) {
        return (
            <div>
                <h1>Ohho You seem to  be offline! Please connect to the internet and try again.</h1>
            </div>
        )
    }

    return listOfRestaurants?.length === 0 ? (<Shimmer />) : (
        <div className='body flex flex-col p-2 mx-10'>
            <div className=' flex justify-center items-center align-middle h-[300px] mx-10 mt-20 sm:mt-[100px] rounded-xl ' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <span className="filter flex justify-center mb-4 w-40 sm:w-[35rem] p-2 bg-white text-orange-500 rounded-full border-[3px]" >
                    <input type="text" value={searchRestaurants} onChange={handleChange} className='outline-none bg-transparent rounded-xl p-1 w-[30rem]' placeholder='Search Restaurants' />
                    <button
                        onClick={() => {
                            const filtered = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase()));
                            setFilteredRestaurants(filtered)
                        }}
                        className='text-gray-700 ml- outline-none rounded-xl'
                    >
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='text-orange-400 text-lg' />
                    </button>
                </span>
            </div>
            <div className='restContainer flex flex-wrap items-center justify-center sm:justify-start p-7 mx-3 mt-4 gap-8'>
                {
                    filteredRestaurants?.map((restaurant) => (
                        <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            <RestaurantCard restaurant={restaurant} />
                        </Link>

                    ))
                }
            </div>
        </div>
    )
}

export default Body