
import React from "react";
// import "../css/index.css";
import { IMG_URL } from "../utils/constants";

 const RestuarantComponent = (props) =>{
  
    //console.log("props:", props.resData);
    const {name, avgRating, costForTwo, cuisines, cloudinaryImageId} = props.resData;
 
 return (
                <div className="w-xs h-sm shadow-xl/30 bg-amber-50 shadow-white rounded-lg mt-2 border-2 border-white hover:bg-amber-400 items-stretch" >
                    <img className="rounded-lg w-xs h-xs " src={IMG_URL+cloudinaryImageId} alt="logo"/>
                    <div className="card-properties p-2">
                    <h2 className=" font-medium text-2xl tracking-wide">   {name}</h2>
                    <h3 className="font-semibold tracking-wide">Rating:    {avgRating}</h3>
                    <h4 className="font-semibold tracking-wide">Price:     {costForTwo ? costForTwo : props.resData.defaultPrice}</h4>
                    <h4 className="font-semibold tracking-wide">Cuisine:   {cuisines.join(", ")}</h4>
                    </div>
                </div>
 )
}

export const discountRestuarant = (RestuarantComponent) => {

    return (props)=>{
       const {header, subHeader} = props?.resData?.aggregatedDiscountInfoV3 || {};
        return (
           <div className="discount-card ">
            <label className="">
                <div className="absolute bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                   Flat Deal - {header} {subHeader ? subHeader : ""}
                </div>
                </label>
            <RestuarantComponent {...props} />
           </div>
        )
    }
}
export default RestuarantComponent;