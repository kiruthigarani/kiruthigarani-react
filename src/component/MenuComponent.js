import useFetchMenu from "../utils/useFetchMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import CategoryComponent from "./CategoryComponent";
const MenuComponent = () => {
  const { info, listOfMenuData } = useFetchMenu();
 
  const isOnline = useOnlineStatus();
  
   const {name,avgRating, costForTwoMessage, cuisines} = info;
   
   //filter ItemCategory only from listOfMenuData

   const filterItemCategory = listOfMenuData.filter ((category) =>{
    return category?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    
   })
   
  return !isOnline ? <h1>You are offline. Please check your internet connection.</h1> : (
    <div className="Restaurant-menu-container text-center">
      <h1 className="font-extrabold text-2xl tracking-wide">{name}</h1>
      <p> Ratings :{avgRating} - {costForTwoMessage}</p>
      <p>Cusinies :{cuisines.join(", ")}</p>
      {
        filterItemCategory.map((category) => (
          <CategoryComponent key={category?.card?.["card"]?.categoryId} category={category?.card?.card} />
        ))
      }
     
    </div>
   
  );
};
export default MenuComponent;