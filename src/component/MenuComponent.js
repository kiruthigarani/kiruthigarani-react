import {useEffect, useState} from "react";
import menuresponse from "../menuResponse.json";
const MenuComponent = () => {

//   useEffect(() => {
//     fetchMenuData();
//   }, []);

//    const fetchMenuData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9435367&lng=78.0537813&restaurantId=101642&catalog_qa=undefined&submitAction=ENTER",
//     );
//     console.log("Menu data fetched",data);
//     const json = await data.json();
    
//   };

  const menuData = menuresponse[0].data.cards;
  
  const listOfMenuData =menuData[4].groupedCard.cardGroupMap.REGULAR.cards;
   const listOfRecommItems = listOfMenuData[1].card.card.itemCards;
 console.log("Menu data:", listOfRecommItems);
  const {name,avgRating, costForTwoMessage, cuisines} = menuData[2].card.card.info;


  return (
    <div className="Restaurant-menu-container">
      <h1>{name}</h1>
      <p> Ratings :{avgRating} - {costForTwoMessage}</p>
      <p>Cusinies :{cuisines.join(", ")}</p>

      <div className="Recommended-container">
        <h1>Recommended : {listOfRecommItems.length}</h1>
        </div>
        {
            listOfRecommItems.map ( (item) => {
                const {id, name, price, description} = item.card.info;
                return (
                    <div key={id} className="recommended-item">
                        <h2>{name}</h2>
                        <p> Price : {price/100 ? price/100 : item.card.info.defaultPrice/100} </p>    
                        <p>Ratings: {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                        <p>{description}</p>
                    </div>
                )
            })
        }
     
    </div>
  );
};
export default MenuComponent;