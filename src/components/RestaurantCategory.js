import React, { useState, useRef } from "react";
import { IMAGE_URL } from "../utils/constants";

const RestaurantCategory = ({ itemData, isOpen, showIndex }) => {
  let title = itemData.card.card.title;
  let itemCards = itemData.card.card.itemCards;
  const contentRef = useRef(null);

  const handleClick = () => {
    showIndex();
  };

  return (
    <div
      className="w-6/12 mx-auto my-2 bg-gray-100 p-2 shadow-lg rounded-lg text-left cursor-pointer transition-all ease-in-out"
      onClick={handleClick}
    >
      {/* Accordion Header */}
      <div className="flex justify-between">
        <span className="font-semibold">
          {title} ({itemCards.length})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          🔽
        </span>
      </div>

      {/* Accordion Content with Transition */}
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={
          isOpen
            ? { maxHeight: `${contentRef?.current?.scrollHeight}px`, opacity: 1 }
            : { maxHeight: "0px", opacity: 0 }
        }
      >
        {/* Accordion Items */}
        <div className="p-2">
          {itemCards.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="m-2 p-2 border-gray-300 border-b-2 flex justify-between"
            >
              <div className="w-10/12">
                <div className="py-2">
                  <span>{item?.card?.info?.name}</span>
                  <span> - ₹ {item?.card?.info?.price / 100}</span>
                </div>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="w-2/12">
                <img
                  src={`${IMAGE_URL}/${item?.card?.info?.imageId}`}
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
