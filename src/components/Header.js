import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


export const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    console.log("Header Render")
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

