import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // Destrcturing 
    const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
      <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-slate-200">
        <img
          className="res-logo rounded-lg"
          alt="res-logo"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  
  export default RestaurantCard;