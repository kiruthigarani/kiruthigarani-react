import React from "react";
import "../css/index.css";

import RestuarantComponent from "./RestuarantComponent";
import resData from "../response.json";

const BodyComponent = () => {
  return (
   
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="search" />
      </div>
      <div className="card-container">
    
    {resData.map((restaurant) => {
      return (
        <RestuarantComponent resCard={restaurant.card.info}
       
        />
      );
    })}
        
       
      </div>
    </div>
  );
};

export default BodyComponent;
