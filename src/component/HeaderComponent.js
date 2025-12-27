import  React from  "react";
import  "../css/index.css";
const logo = require('../images/logo.png');

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
             <img src={logo.default || logo} alt="Kiruthiga logo" />
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