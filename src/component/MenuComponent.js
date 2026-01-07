import useFetchMenu from "../utils/useFetchMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import CategoryComponent from "./CategoryComponent";
import React, { useState } from "react";
const MenuComponent = () => {
  const { info, listOfMenuData } = useFetchMenu();
  const [showIndex, setShowIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const isOnline = useOnlineStatus();
  
   const {name,avgRating, costForTwoMessage, cuisines} = info;
   
   //filter ItemCategory only from listOfMenuData
const handleToggle = (index) => {
  setOpenIndex(prev => (prev === index ? null : index));
};
   const filterItemCategory = listOfMenuData.filter ((category) =>{
    return category?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    
   })
   
  return !isOnline ? <h1>You are offline. Please check your internet connection.</h1> : (
    <div className="Restaurant-menu-container text-center">
      <h1 className="font-extrabold text-2xl tracking-wide">{name}</h1>
      <p> Ratings :{avgRating} - {costForTwoMessage}</p>
      <p>Cusinies :{cuisines.join(", ")}</p>
      {
        filterItemCategory.map((category,index) => (
          <CategoryComponent key={category?.card?.["card"]?.categoryId} category={category?.card?.card} 
         
            index={index}
            isOpen={openIndex === index}
            toggle={() => handleToggle(index)}
            
            />
        ))
      }
     
    </div>
   
  );
};
export default MenuComponent;