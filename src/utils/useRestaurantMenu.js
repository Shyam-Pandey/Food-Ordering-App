import { useEffect, useState } from 'react'
import { RESTAURANT_MENU_API } from '../utils/constants'

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchMenus()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const fetchMenus = async () => {
        const data = await fetch(`${RESTAURANT_MENU_API}${resId}`);
        const json = await data.json()
        //console.log(resId)
        setRestaurantInfo(json.data)
    }
    return restaurantInfo;
}

export default useRestaurantMenu;