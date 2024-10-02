
import { Link } from 'react-router-dom';


function ProductCard({ product }) {

  const {id, title, image, price, discountedPrice} = product;

  {/*Product Discount Calculation**/}
  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount
    ? ((price - discountedPrice) / price) * 100
    : 0;

  return (
    <li className="mx-4 tracking-wide ">
           <Link to={`/individual-product/${id}`}>
      <div className="flex flex-col w-80  sm:w-60 md:w-50  my-4 sm:mx-4 shadow-lg  bg-light-beige">
 
        <img
          className="brightness-90 h-[250px] sm:h-[200px] w-full object-cover   px-4 pt-4"
          src={image.url}
          alt={image.alt || title}
        />
        <h2 className=" pt-4 uppercase text-center text-lg md:text-xl font-bold ">{title}</h2>
        <div className="flex flex-row justify-between mt-2">
          <div className="py-2 ps-4">
            {hasDiscount ? (
              <>
                <p className="font-semibold">{discountedPrice} kr.</p>
                <p className="line-through font-medium">{price} kr.</p>
              </>
            ) : (
              <p>{price} kr.</p>
            )}
          </div>
          {hasDiscount && (
            <p className="bg-md-beige p-2 self-center">
              {discountPercentage.toFixed()}% OFF
            </p>
          )}
        </div>
       
        <button className="bg-dark-brown text-light-beige font-semibold  px-24 sm:px-12 py-3 mx-auto my-6 rounded-xl">
          View product 
        </button>
      </div>
      </Link>
    </li>
  );
}

export default ProductCard;
