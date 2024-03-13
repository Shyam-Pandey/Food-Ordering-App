import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import RestaurantCard from './RestaurantCard'
import { RESTAURANT_LIST } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import Shimmer from './Shimmer'
//import useRestaurantCard from '../utils/useRestaurantCard'

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchRestaurants, setSearchRestaurants] = useState("");

    const handleChange = (e) => {
        setSearchRestaurants(e.target.value);
    }


    const fetchData = async () => {
        // API call to get data here.
        const data = await fetch(RESTAURANT_LIST);
        const json = await data.json();
        //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle)
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

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


    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className='body flex flex-col p-2 mx-10'>
            <div className='filter flex justify-center mb-4'>
                <input type="text" value={searchRestaurants} onChange={handleChange} className='outline-none border-2 border-blue-700 rounded-lg p-2 w-56' />
                <button
                    onClick={() => {
                        const filtered = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase()));
                        setFilteredRestaurants(filtered)
                    }}
                >
                    Search
                </button>
            </div>
            <div className='restContainer flex flex-wrap justify-between p-6 gap-6'>
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            {/* modifiedRestaurantCard */}
                            <RestaurantCard restaurant={restaurant} />
                        </Link>

                    ))
                }
            </div>
        </div>
    )
}

export default Body