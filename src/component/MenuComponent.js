import useFetchMenu from "../utils/useFetchMenu";
const MenuComponent = () => {
  const { info, listOfRecommItems } = useFetchMenu();
  console.log("Menu Component Rendered",info);
   const {name,avgRating, costForTwoMessage, cuisines} = info;


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