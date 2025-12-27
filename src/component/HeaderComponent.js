import  React from  "react";
import  "../css/index.css";
import {logo} from '../images/logo.png';


const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
             <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" alt="Kiruthiga logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
               
            </div>
        </div>
    );
}

export default Header;