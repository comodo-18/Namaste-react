import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(0);

  const {id} = useParams();
  
  const resMenu = useRestaurantMenu(id);

  if (resMenu === null) return <Shimmer />
  // console.log(resMenu?.cards[2]?.card?.card?.info);
  const {name, cuisines, costForTwo} = resMenu?.cards[2]?.card?.card?.info
  // const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
  // console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  const cardGroups = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  // console.log(cardGroups);

  let itemCategories = cardGroups.filter(group => group.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


  return (
    <div className='menu text-center'>
      <h3 className='font-bold text-xl'>{name}</h3>
      <p className='font-semibold'>{cuisines.join(", ")} - {`Cost for two ${costForTwo/100}`}</p>
      <h4 className='font-bold'>Menu</h4>
      <ul>
        {itemCategories?.map((itemCategory, index) => <RestaurantCategory itemData = {itemCategory} isOpen = {index === showIndex ? true : false} showIndex = {() => setShowIndex(index)}/>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu