import menuresponse from "../menuResponse.json";
const useFetchMenu = () => {


    // useEffect(() => {
  //   fetchMenuData();
  // }, []);

  //  const fetchMenuData =  async() => {
  //   const data =  await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9435367&lng=78.0537813&restaurantId=101642&catalog_qa=undefined&submitAction=ENTER",
  //   );
  //   console.log("Menu data fetched",data);
  //   //const json =  data.json();
    
  // };

  const menuData = menuresponse[0].data.cards;
  
  const listOfMenuData =menuData[4].groupedCard.cardGroupMap.REGULAR.cards;
  const listOfRecommItems = listOfMenuData[1].card.card.itemCards;
 console.log("Menu data:", listOfRecommItems);
 const info = menuData[2].card.card.info;

  return { info, listOfRecommItems };
}
export default useFetchMenu;