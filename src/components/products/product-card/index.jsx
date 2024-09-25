
import { Link } from 'react-router-dom';


function ProductCard({ product }) {
  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? ((product.price - product.discountedPrice) / product.price) * 100
    : 0;

  return (
    <li className="mx-4 tracking-wide ">
           <Link to={`/individual-product/${product.id}`}>
      <div className="my-4 sm:mx-6 flex flex-col shadow-lg w-80 sm:w-70 md:w-60 bg-beige ">
 
        <img
          className="brightness-90 h-[250px] w-full object-cover sm:h-[200px]  px-4 pt-4"
          src={product.image.url}
          alt={product.image.alt || product.title}
        />
        <h2 className=" pt-4 uppercase text-center text-lg md:text-xl font-semibold ">{product.title}</h2>
        <div className="flex flex-row justify-between mt-2">
          <div className="py-2 ps-4">
            {hasDiscount ? (
              <>
                <p className="font-semibold">{product.discountedPrice} kr.</p>
                <p className="line-through font-normal">{product.price} kr.</p>
              </>
            ) : (
              <p>{product.price} kr.</p>
            )}
          </div>
          {hasDiscount && (
            <p className="bg-md-beige p-2 self-center">
              {discountPercentage.toFixed()}% OFF
            </p>
          )}
        </div>
       
        <button className="bg-dark-brown text-light-beige font-semibold  px-24 sm:px-12 py-4 mx-auto my-6 rounded-xl">
          View product 
        </button>
      </div>
      </Link>
    </li>
  );
}

export default ProductCard;
