import { useCart } from "../../context/cart-context";

const CartList = () => {
  const { cart } = useCart();

  return (
    <div>
      <ul>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={product.id}>
              <li className="flex flex-row justify-center items-end mb-4 relative mx-4 my-4 text-xs font-medium tracking-wide">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 absolute -right-0 top-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="w-1/3">
                  <img
                    className="h-[120px] sm:h-[120px]  w-full object-cover brightness-90"
                    src={product.image.url}
                    alt={product.image.alt || product.title}
                  />
                </div>
                <div className="w-2/3 sm:w-5/6 ">
                  <div className="flex flex-col items-center mb-4">
                    <h3 className=" mx-2 font-semibold uppercase text-sm text-center ">{product.title}</h3>
                  
                  </div>

                  {product.discountedPrice < product.price ? (
                    <div className="flex flex-row  justify-center sm:text-sm mb-4">
                      <p className="font-semibold text-red-600 me-2">
                        {product.discountedPrice} kr.
                      </p>
                      <p className="line-through text-gray-500 ms-2">
                        {product.price} kr.
                      </p>
                  
                    </div>
                  ) : (
                    <div className="flex flex-row justify-center mb-4 sm:text-sm">
                      <p className="font-semibold">{product.price} kr.</p>
                 
                    </div>
                  )}
                  <div className="flex justify-center mx-2">
                  <p className=" uppercase me-2">Count: X</p>
                  <p className=" uppercase ms-2">Total: xxx</p>
                  </div>
                      
                </div>
              </li>
            
              <hr className="my-4 border-dark-brown w-full"></hr>
            </div>
          ))
        )}
        <div className="flex flex-row justify-end mt-12">
            <div>
            <p className="uppercase me-6 text-center mb-2 font-semibold ">Total amount</p>
            <hr className="mb-4 me-6 border-dark-brown"></hr>
            <p className="uppercase me-6 text-center text-sm font-medium">xxx ,- Nok.</p>
            </div>
      
        </div>
   
      </ul>
    </div>
  );
};

export default CartList;
