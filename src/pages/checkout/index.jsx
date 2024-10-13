import { useNavigate } from 'react-router-dom';
import Button from "../../components/button";
import { useCart } from "../../context/cart-context";
import CartList from "../../components/cart-list";

function CheckoutPage() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout-success/');
  };

  return (
    <div className="container lg:w-3/4 xl:w-2/3">
      <h1 className="uppercase text-2xl mx-4 tracking-wide">Your shopping bag</h1>
      <hr className="my-4 border-oak-brown opacity-30"></hr>
      <div><CartList /></div>
      <div className="mx-4 mt-12 w-auto">
        <Button className="" text="Checkout" onClick={handleCheckout} />
      </div>
    </div>
  );
}

export default CheckoutPage;
