import React, { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [topRatedResturants, setTopRatedResturants] = useState([]);
  const [allResturants, setAllResturants] = useState([]);

  const fetchData = async () => {
    let apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJson = await apiData.json();
    // console.log(dataJson);
    setTopRatedResturants(
      dataJson?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllResturants(
      dataJson?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {topRatedResturants, allResturants, setTopRatedResturants};
};

export default useRestaurantList;
