
import CartList from "../../components/cart-list"

function CheckoutPage() {
    return ( 
    <div class="container lg:w-3/4 xl:w-2/3">
      <hr className="my-4 border-oak-brown opacity-30"></hr>
     <h1 className="uppercase text-2xl mx-4  tracking-wide">Your shoppingbag</h1>    
      <div><CartList/></div> 
        </div>
    )
  }
export default CheckoutPage 