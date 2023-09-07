import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    // console.log("Header Render");
    //if no dependecy array => useeffect called on every render
    //If dependency array is empty = [] => useEffect  is called initial render just once
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated 
    // useEffect(()=>{
    //     console.log("useEffect called")
    // }, [btnNameReact]);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

