
import React from "react";
import "../css/index.css";


const RestuarantComponent = (props) =>{
  {console.log("props:", props.resCard);}
 return (
        
                <div className="res-card" key={props.resCard.id}>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1671180015/17d98089d658df8b7966ee3b03e7421b.jpg"} alt="logo"/>
                    <div className="card-properties">
                        <h2>{props.resCard.name}</h2>
                    <h3>Rating:{props.resCard.ratings.aggregatedRating.rating}</h3>
                    <h4>price: {props.resCard.price ? props.resCard.price / 100 : props.resCard.defaultPrice /100}</h4>
                    </div>
                    
                </div>
 )
 
}

export default RestuarantComponent;