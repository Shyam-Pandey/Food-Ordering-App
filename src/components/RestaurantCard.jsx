import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RESTAURANT_MENU_LOGO } from '../utils/constants'

const RestaurantCard = ({ restaurant }) => {
    let ratingColor = "white"
    if (restaurant?.info?.avgRating >= 4) {
        ratingColor = "green"
    } else if (restaurant?.info?.avgRating) {
        ratingColor = "yellow"
    } else {
        ratingColor = "red"
    }
    console.log(restaurant.info)
    //console.log(restaurant.info) style={{ width: '240px', height: '272px', margin: '5px 5px', border: '2px solid black', color: 'black', borderRadius: '10px' }}
    return (
        <div className='resCard w-60 h-[295px] m-1 shadow-3xl border-[2px] border-green-100 bg-white rounded-xl hover:scale-105 ' >
            <img
                src={`${RESTAURANT_MENU_LOGO}/${restaurant?.info?.cloudinaryImageId}`}
                alt="logo"
                className="w-52 h-36 m-4 border-[1px] border-gray-50 rounded-lg"
            />
            <div className="p-2 ml-2">
                <h2 className="text-gray-500">{restaurant?.info?.name}</h2>
                <span className="flex text-sm font-bold gap-1 mt-1">
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-star" color={ratingColor} />
                        {restaurant?.info?.avgRating}
                    </span>
                    <span >
                        <FontAwesomeIcon className="text-[4px] mr-1" icon="fa-solid fa-circle" />
                        {restaurant.info.sla.slaString}
                    </span>
                </span>
                <p className="text-xs mt-1">{restaurant?.info?.cuisines?.slice(0, 3).join(",")}</p>
                <h6 className="mt-1">{restaurant.info.areaName}</h6>
            </div>
        </div>
    )
}

export const modifiedRestaurantCard = (RestaurantCard) => {
    return (props) => {
        <>
            <h3>Promoted</h3>
            <RestaurantCard  {...props} />
        </>
    }
}

export default RestaurantCard;