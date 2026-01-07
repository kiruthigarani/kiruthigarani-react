import  React , {useState} from  "react";
import CategoryDetail from "./CategoryDetail";

const CategoryComponent = ({category}) => {

  const [isOpen, setIsOpen] = useState(false); //this will help to toggle the category items, but it wont collapse other opened categories

  const clickHandler = () => {
   
    setIsOpen(!isOpen);
  }

  return (
    <>
    <div onClick={clickHandler} className="category-card border-0 border-gray-300 rounded-lg  w-6/12 mx-auto my-2 p-2 flex justify-between items-center bg-gray-100 hover:bg-gray-300 cursor-pointer">
        <span className="font-bold font-medium">{category.title} ({category["itemCards"].length})</span>
        <span >⬇️</span>
      </div>
      <div className="category-items-container ">
       
        {
          category["itemCards"].map((item) => {
             const processsedData = item?.card?.info;
             return isOpen && <CategoryDetail key={processsedData?.id} CategoryDetail={processsedData} />
          })
        }
        </div>
    </>
  )
}
export default CategoryComponent;