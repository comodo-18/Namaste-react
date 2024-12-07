import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (id) => {
    const [resMenu,setResMenu] = useState(null);
  useEffect(() => {
    fetchMenuItems();
  },[])

  const fetchMenuItems = async() => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}`);
    const menudata = await data.json();
    setResMenu(menudata.data);

  }

  return resMenu;
}

export default useRestaurantMenu