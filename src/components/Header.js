import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    // console.log("Header Render");
    //if no dependecy array => useeffect called on every render
    //If dependency array is empty = [] => useEffect  is called initial render just once
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated 
    // useEffect(()=>{
    //     console.log("useEffect called")
    // }, [btnNameReact]);

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    return (
      <div className="flex justify-between shadow-lg m-2  border-black bg-green-100 sm:bg-yellow-50">
        <div className="logo-container">
          <img
            className="w-36"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul className="flex justify-between gap-5 m-8">
            <li>Online Status {onlineStatus?"🌏":"🛑"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
            }}>{btnNameReact}</button>

            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

