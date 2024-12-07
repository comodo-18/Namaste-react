import { IMAGE_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const { name, cuisines, image, avgRating, cloudinaryImageId } =
    props?.resData;
  return (
    <div className="res-card w-[250px] m-2 p-3 rounded-3xl hover:bg-gray-200 transition ease-out duration-300 transform hover:scale-95">
      <div>
        <img
          className="rounded-2xl aspect-square"
          src={`${IMAGE_URL}/${cloudinaryImageId}`}
        />
      </div>
      <h2 className="font-bold py-2 text-xl truncate">{name}</h2>
      <p className="truncate">{cuisines.join(", ")}</p>
      <span>{avgRating} ⭐</span>
    </div>
  );
};

export const enhancedResturanCard = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-600 text-white z-[1] m-2 p-2 rounded-md ml-3">
          {props.resData.aggregatedDiscountInfoV3.header +
            " " +
            props.resData.aggregatedDiscountInfoV3.subHeader}
            {/* console.log() */}
        </label>
            <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
