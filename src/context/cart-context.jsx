import { createContext, useContext } from "react";
import propTypes from "prop-types";
import { useLocalStorage } from "../hooks/use-storage";


 const CartContext = createContext();

     {/** Add to cart, save to local storage */}
 export const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage("shoppingbag", []);
  

    const addToCart = (item) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });
    };
    
     {/** Removing item one by one, clearing all items with same id, clearing cart. */}
    const removeFromCart = (itemId) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
        if (existingItem && existingItem.quantity > 1) {
          return prevCart.map((cartItem) =>
            cartItem.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          return prevCart.filter((cartItem) => cartItem.id !== itemId);
        }
      });

    };

    const clearItemFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
      };
      
      const clearCart = () => {
        setCart([]); // Resets the cart to an empty array
      };
      
  
      {/** Total amount based on quantity*/}
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
    const totalPrice = cart.reduce((total, item) => {
      const price = item.discountedPrice < item.price ? item.discountedPrice : item.price;
      return total + price * item.quantity;
    }, 0).toFixed(2);
  
    return (
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearItemFromCart, clearCart, totalItems, totalPrice }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  

CartProvider.propTypes = {
    children: propTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);