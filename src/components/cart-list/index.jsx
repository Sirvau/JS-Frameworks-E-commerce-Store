import { useCart } from "../../context/cart-context";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart, addToCart, removeFromCart, totalPrice, clearCart, clearItemFromCart } = useCart();

  return (
    <div>
      <ul>
        {cart.length === 0 ? (
          <p className="my-40 text-center text-xl">Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={product.id}>
              <li className="flex flex-row justify-center items-end sm:items-center mb-4 relative mx-4 my-4 text-xs font-medium tracking-wider">
                <button onClick={() => clearItemFromCart(product.id)} id="remove-product-from-cart-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 absolute -right-0 top-0 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="w-1/3 sm:w-44">
                  <img
                    className="h-[110px]  w-32 sm:w-2/3 object-cover brightness-90"
                    src={product.image.url}
                    alt={product.image.alt || product.title}
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex flex-col items-center mb-2">
                    <h3 className="mx-2 sm:mx-0 font-semibold uppercase text-sm text-center">
                      {product.title}
                    </h3>
                  </div>

                  {product.discountedPrice < product.price ? (
                    <div className="flex flex-row justify-center sm:text-sm mb-2">
                      <p className="font-semibold text-red-600 me-2">
                        {product.discountedPrice} kr.
                      </p>
                      <p className="line-through text-gray-500 ms-2">
                        {product.price} kr.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-row justify-center sm:text-sm mb-2">
                      <p className="font-semibold">{product.price} kr.</p>
                    </div>
                  )}

                  <div className="flex justify-center mx-2">
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row items-center mt-2">
                        <button onClick={() => removeFromCart(product.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#6F390D"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#F5F1EB"
                            className="size-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                        <p className="font-semibold mx-2 text-sm">
                          {product.quantity}
                        </p>
                        <button onClick={() => addToCart(product)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#6F390D"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#F5F1EB"
                            className="size-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <hr className="my-4 border-dark-brown opacity-15 w-full"></hr>
            </div>
          ))
        )}
     
      </ul>
      <div className="flex flex-row justify-end mt-12">
          <div>
            <p className="uppercase me-6 text-center mb-2 font-semibold ">
              Total amount
            </p>
            <hr className="mb-4 me-6 border-dark-brown"></hr>
            <p className="uppercase me-6 text-center text-sm font-medium tracking-wider">
              {totalPrice} ,- Nok.
            </p>
          </div>
        </div>
        <Link to={`/checkout-success/`}>
        <button onClick={() => clearCart()} className="flex justify-items-center bg-oak-brown text-light-beige font-semibold  px-24 sm:px-12 py-3 mx-auto my-6 rounded-xl uppercase tracking-widest">
          Checkout 
        </button>
        </Link>
    </div>
  );
};

export default CartList;
