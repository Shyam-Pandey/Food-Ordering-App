import { useEffect, useState } from "react";

const useRestaurantCard = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        // API call to get data here.
        const data = await fetch(RESTAURANT_LIST);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return { listOfRestaurants, filteredRestaurants, setFilteredRestaurants, setListOfRestaurants }
}

export default useRestaurantCard;