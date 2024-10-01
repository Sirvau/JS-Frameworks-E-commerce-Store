
import { useCart } from "../../context/cart-context";


const CartList = () => {
    const {cart} = useCart;

    return (
        <div>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    </div>
            ))}
        </div>
    );
};

export default CartList