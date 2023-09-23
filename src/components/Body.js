import RestaurantCard, {
  withaggregatedDiscountInfoV3Label,
} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  //Local State Variables - super powerful variable

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredlistRestaurants, setfilteredlistRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardaggregatedDiscountInfoV3 =
    withaggregatedDiscountInfoV3Label(RestaurantCard);

  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //optional chaning
    setlistOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlistRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  const {setUserName, loggedInUser} = useContext(UserContext);

  //Conditional rendering
  //   if(listOfRestaurants.length===0){
  //     return <Shimmer/>
  //   }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-solid border-black shadow-lg"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="m-4 bg-green-100 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredlistRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredlistRestaurants(filteredlistRestaurants);
            }}
          >
            Search
          </button>
          <label>UserName:    </label>
          <input className="border border-black p-2" 
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-gray-100 w-25 h-10 mt-11 mr-4 rounded-lg"
          onClick={() => {
            //Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredlistRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 &&
            Object.entries(restaurant.info.aggregatedDiscountInfoV3).length !==
              0 ? (
              <RestaurantCardaggregatedDiscountInfoV3 resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
            {/* <RestaurantCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
