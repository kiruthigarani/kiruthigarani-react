
import React from "react";
import "../css/index.css";


 const RestuarantComponent = (props) =>{
  {
    //console.log("props:", props.resData);

  }
 return (
                <div className="res-card" >
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1671180015/17d98089d658df8b7966ee3b03e7421b.jpg"} alt="logo"/>
                    <div className="card-properties">
                    <h2>{props.resData.name}</h2>
                    <h3>Rating:{props.resData.avgRating}</h3>
                    <h4>price: {props.resData.costForTwo ? props.resData.costForTwo : props.resData.defaultPrice}</h4>
                    <h4>cuisine: {props.resData.cuisines.join(", ")}</h4>
                    </div>
                </div>
 )
 
}
export default RestuarantComponent;