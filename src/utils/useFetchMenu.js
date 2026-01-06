import { useEffect } from "react";
import { useParams } from "react-router";
import menuresponse from "../menuResponse.json";
const useFetchMenu = () => {
    const restaurantId = useParams().resId;

  //   useEffect(() => {
  //   fetchMenuData();
  // }, []);

  //  const fetchMenuData =  async() => {
  //   const data =  await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9435367&lng=78.0537813&restaurantId=${restaurantId}`,
  //   );
  //   console.log("Menu data fetched",data);
  //   //const json =  data.json();
    
  // };

  const menuData = menuresponse[0].data.cards;
    const listOfMenuData =menuData[4].groupedCard.cardGroupMap.REGULAR.cards;
  console.log("Menu data-listOfMenuData:", listOfMenuData);
  const listOfRecommItems = listOfMenuData[1].card.card.itemCards;
 console.log("Menu data:", listOfRecommItems);
 const info = menuData[2].card.card.info;

  return { info, listOfMenuData };
}
export default useFetchMenu;

