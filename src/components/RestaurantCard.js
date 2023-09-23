import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {loggedInUser} = useContext(UserContext);

    // Destrcturing 
    const { name, cuisines, avgRating, costForTwo, sla} = resData?.info;
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
        <h4>User: {loggedInUser}</h4>
      </div>
    );
  };

  // Higher order component

  // input - RestaurantCard => RestaurantCardaggregatedDiscountInfoV3
  
  export const withaggregatedDiscountInfoV3Label = (RestaurantCard) =>{
    return (props) => {
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Offer</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;