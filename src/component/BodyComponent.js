import React, {useState} from "react";
import "../css/index.css";

import RestuarantComponent from "./RestuarantComponent";
import resData from "../response.json";

const BodyComponent = () => {
  
  const [restaurants, setRestaurants] = useState(resData);
  return (
   
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="search" />
      </div>
      <div className="btn-container">
       <button className="filter-btn" onClick={()=>{
        let resData1=  resData.filter( (restaurant) =>{
            return (restaurant.card.info.ratings.aggregatedRating.rating > 4)
          }
          )
        setRestaurants(resData1);
       }}>Top Rated Restaurants</button>
      </div>
      <div className="card-container">
    
    {restaurants.map((restaurant) => {
      return (
        <RestuarantComponent key={restaurant.card.info.id} resCard={restaurant.card.info}
       
        />
      );
    })}
        
       
      </div>
    </div>
  );
};

export default BodyComponent;
