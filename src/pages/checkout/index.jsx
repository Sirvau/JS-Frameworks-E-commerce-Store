
import CartList from "../../components/cart-list"

function CheckoutPage() {
    return ( 
    <div>
     <h1 className="uppercase text-2xl mx-4  tracking-wide">Your shoppingbag</h1>    
     <hr className="my-4 border-dark-brown"></hr>
      <div><CartList/></div> 
        </div>
    )
  }
export default CheckoutPage 