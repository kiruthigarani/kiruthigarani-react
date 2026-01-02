import  React , {useState} from  "react";
import  "../css/index.css";
import {logo} from '../images/logo.png';

import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";


const Header = () => {
    const [btnName, setBtnName] = useState("LOGIN");
    const isOnline = useOnlineStatus();
    return (
        <div className="header-container">
            <div className="logo">
                <Link to="/">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" alt="Kiruthiga logo" />
                </Link>
             
            </div>
            <div className="nav-items">
                <ul>
                    <li>{isOnline ? "Online" : "Offline"}</li>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <button className="login-btn" onClick={(()=>{
                        ( btnName === "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN"));
                    })}>{btnName}</button>
                   
                </ul>
               
            </div>
        </div>
    );
}

export default Header;