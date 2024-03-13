import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu'
import ItemsCard from './ItemsCard';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);

    if (restaurantInfo === null) return <Shimmer />
    console.log(restaurantInfo)
    const { name, cuisines, city, areaName, totalRatingsString, avgRating } = restaurantInfo?.cards[0]?.card?.card?.info;

    const items = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
    const filteredItems = items?.filter((item) => (
        item?.card?.['card']?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))

    let text;
    if (avgRating >= 4) {
        text = <h1 className='text-green-500'>{avgRating}</h1>
    }
    else if (avgRating < 4 && avgRating >= 3) {
        text = <h1 className='text-orange-500'>{avgRating}</h1>
    }
    else if (avgRating < 3 && avgRating >= 2) {
        text = <h1 className="text-yellow-600">{avgRating}</h1>
    } else {
        text = <h1 className='text-red-500'>{avgRating} </h1>
    }

    return (
        <div className='flex flex-col gap-3 justify-center mx-10 sm:mx-32 md:mx-36 lg:mx-44 xl:mx-72 my-12 bg-green-200'>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <div className='flex justify-between rounded-lg font-medium'>
                <div className='flex flex-col my-5' >
                    <h1 className='text-xl'>{name}</h1>
                    <p className='text-xs text-gray-400 mt-2'>{cuisines.join(",")}</p>
                    <p className='text-xs text-gray-400 mt-2'>{areaName},{city}</p>
                </div>
                <div className='flex flex-col w-[70px] h-[80px] py-2 px-1  bg-gray-50 text-center text-black rounded-lg border-2 border-gray-200'>
                    {text}
                    <div className='w-12 border-b-2 m-2 border-gray-200' />
                    <p className='text-[10px] text-'>{totalRatingsString}</p>
                </div>
            </div>
            <div className='w-[100%] border-[1px] border-gray-200' />
            <div>
                {filteredItems.map((item) => (
                    <ItemsCard key={item.card.card.title} item={item} />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu