import ResturantCard, {enhancedResturanCard} from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const { topRatedResturants, allResturants, setTopRatedResturants } =
    useRestaurantList();

  const ResturantCardEnhanced = enhancedResturanCard(ResturantCard);  

  if (topRatedResturants.length === 0) {
    return <Shimmer />;
  }
  console.log(topRatedResturants);
  return (
    <div className="body">
      <input
        className="border border-black border-solid m-4 rounded-md px-2"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Search..."
      />
      <button
        className="px-4 py-1 bg-zinc-300 rounded-md mx-2"
        onClick={() => {
          const filteredRes = allResturants.filter((res) =>
            res.info.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setTopRatedResturants(filteredRes);
        }}
      >
        Search
      </button>
      <button
        className="bg-black text-white rounded-md px-3 py-1"
        onClick={() => {
          const filteredRes = allResturants.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setTopRatedResturants(filteredRes);
        }}
      >
        Top Rated restaurants
      </button>
      <button
        className="bg-yellow-200 px-3 py-1 ml-2"
        onClick={() => {
          setTopRatedResturants(allResturants);
        }}
      >
        Clear Filter
      </button>
      <div className="flex flex-wrap">
        {topRatedResturants.map((resturant) => {
          return (
            <Link
              to={`/restaurant/${resturant?.info?.id}`}
              key={resturant?.info?.id}
            >
              {resturant?.info?.aggregatedDiscountInfoV3 ? <ResturantCardEnhanced resData={resturant?.info} /> : <ResturantCard resData={resturant?.info} />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
