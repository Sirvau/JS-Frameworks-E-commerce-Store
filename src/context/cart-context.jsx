import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";


 const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
        {children}
        </CartContext.Provider> 
    );
};

CartProvider.propTypes = {
    children: propTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);