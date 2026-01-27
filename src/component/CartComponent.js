import { useSelector } from "react-redux";
import CategoryDetail from "./CategoryDetail"
const CartComponent = () =>{

const getCart = useSelector((item)=> item.cartConfig.items);

//console.log("CART INFO:",getCart)


  return(
    <div>
        {
             getCart.map((cartDetails) =>{
            const id = cartDetails?.id;
          
            return <CategoryDetail key={id}  CategoryDetail={cartDetails} removeAdd={false} />
})
        }
    </div>
  )
      
}

export default CartComponent;