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
           
            return (
              <div key={id}>
                <CategoryDetail CategoryDetail={cartDetails} removeAdd={false} quantity={cartDetails.quantity || 1} />
              
              </div>
            )
})
        }
    </div>
  )
      
}

export default CartComponent;