import React, { useState,useContext}  from "react";
 import { useSelector } from "react-redux";
import userInformation from "../utils/userInformation";
import "../index.css";
import { logo } from "../images/logo.png";

import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";


const Header = () => {
  const [btnName, setBtnName] = useState("LOGIN");

  const {username} = useContext(userInformation);
  const isOnline = useOnlineStatus();
    const cartItems = useSelector((item)=> item.cartConfig.items);
    console.log("HEADER:",cartItems);
  return (
    <div className="flex justify-between shadow-lg my-2">
      <div className="w-56 ">
        <Link to="/">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
            alt="Kiruthiga logo"
          />
        </Link>
      </div>
      <div className="">
        <ul className="flex gap-10 p-4 m-4  font-bold text-lg">
          <li className={isOnline ? "text-green-500" : "text-red-600"}>
            {isOnline ? "Online" : "Offline"}
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li> <Link to="/cart">Cart ({cartItems.length})</Link></li>
           <li>Careers</li>
         {/* using context to get the user information */}
          <li>Hello, {username}</li> 
          <button
            className="login-btn"
            onClick={() => {
              btnName === "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
