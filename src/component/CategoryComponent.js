
import CategoryDetail from "./CategoryDetail";


const CategoryComponent = ({category, index, isOpen, toggle }) => {

  // const [isOpen, setIsOpen] = useState(false); //this will help to toggle the category items, but it wont collapse other opened categories
  /**
   * Instead of above state in CategoryComponent, we can lift the state up to MenuComponent and pass the state and setState function as props to CategoryComponent
   * This way we can manage which category is open from MenuComponent
   */
  console.log("isOpen:", isOpen);
 
  return (
    <>
    <div onClick={toggle}
        role="button"
        tabIndex={index} //these attributes make it keyboard-navigable and accessible to users with disabilities. This follows WCAG accessibility guidelines.
        aria-expanded={isOpen}
        className="category-card border-0 border-gray-300 rounded-lg  w-6/12 mx-auto my-2 p-2 flex justify-between items-center bg-gray-100 hover:bg-gray-300 cursor-pointer">
        <span className="font-bold font-medium">{category.title} ({category["itemCards"].length})</span>
        <span >⬇️</span>
   </div>
       {isOpen && (
      <div className="category-items-container ">
       
        {
          category["itemCards"].map((item) => {
             const processsedData = item?.card?.info;
             return <CategoryDetail key={processsedData?.id} CategoryDetail={processsedData} removeAdd={true} />
          })
        }
        </div>
         )}
    </>
  )
}
export default CategoryComponent;