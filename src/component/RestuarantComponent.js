
import React, {useContext} from "react";
// import "../css/index.css";
import { IMG_URL } from "../utils/constants";
import userInformation from "../utils/userInformation";

 const RestuarantComponent = (props) =>{
    const {username} = useContext(userInformation);
    //console.log("props:", props.resData);
    const {name, avgRating, costForTwo, cuisines, cloudinaryImageId} = props.resData;
 
 return (
                <div className="cards w-md h-sm shadow-xl/30 bg-amber-50 shadow-white rounded-lg mt-2 border-2 border-white hover:bg-amber-400 items-stretch" >
                    <img className="rounded-lg w-md h-md " src={IMG_URL+cloudinaryImageId} alt={name}/>
                    <div className="card-properties p-2">
                    <p className="font-medium text-lg tracking-wide">   {name}</p>
                    <p className="font-semibold tracking-wide">Rating:    {avgRating}</p>
                    <p className="font-semibold tracking-wide">Price:     {costForTwo ? costForTwo : props.resData.defaultPrice}</p>
                    <p className="font-semibold text-xs tracking-wide">Cuisine:   {cuisines.join(", ")}</p>
                    <p className="font-semibold text-xs tracking-wide">Username : {username}</p>
                    
                    </div>
                </div>
 )
}

//Higher Order Component (HOC)
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