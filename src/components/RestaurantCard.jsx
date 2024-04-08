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
    return (
        <div className='w-56 h-[250px] md:w-60 md:h-[270px] shadow-3xl border-[2px] border-orange-100 rounded-xl hover:scale-105 ' >
            <img
                src={`${RESTAURANT_MENU_LOGO}/${restaurant?.info?.cloudinaryImageId}`}
                alt="logo"
                className="w-48 h-28 md:w-52 md:h-36 m-[14px] border-[1px] border-gray-50 rounded-lg"
            />
            <div className="ml-5 -mt-5">
                <h2 className="text-gray-500">{restaurant?.info?.name}</h2>
                <span className="flex text-sm font-bold gap-1 mt-1">
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-star" color={ratingColor} />
                        {restaurant?.info?.avgRating}
                    </span>
                    <span >
                        <FontAwesomeIcon className="text-[4px] mr-1" icon="fa-solid fa-circle" />
                        {restaurant?.info?.sla?.slaString}
                    </span>
                </span>
                <p className="text-xs mt-1">{restaurant?.info?.cuisines?.slice(0, 3).join(",")}</p>
                <h6 className="mt-1">{restaurant.info.areaName}</h6>
            </div>
        </div>
    )
}

export default RestaurantCard;