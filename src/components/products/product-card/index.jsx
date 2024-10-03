import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { id, title, image, price, discountedPrice } = product;

 {/** Product Discount Calculation */} 
  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount
    ? ((price - discountedPrice) / price) * 100
    : 0;

  return (
    <li className="mx-4 tracking-wide ">
      <Link to={`/individual-product/${id}`}>
        <div className="flex flex-col w-80 sm:w-60 md:w-50 my-4 sm:mx-4 shadow-lg bg-light-beige relative min-h-[440px]">
          {hasDiscount && (
            <p className="bg-md-beige py-2 w-1/3 text-center font-semibold self-center absolute top-0 right-0 z-10 mix-blend-luminosity rounded-bl-lg">
              {discountPercentage.toFixed()}% OFF
            </p>
          )}
          <img
            className="brightness-75 h-[250px] sm:h-[200px] w-full object-cover"
            src={image.url}
            alt={image.alt || title}
          />
          <h2 className="pt-4 mx-4 uppercase text-center text-lg font-medium tracking-widest">
            {title}
          </h2>
          <div className="flex flex-row justify-center mt-2">
            <div className="py-2 ps-4">
              {hasDiscount ? (
                <>
                  <p className="font-medium text-red-400">{discountedPrice} kr.</p>
                  <p className="line-through font-medium">{price} kr.</p>
                </>
              ) : (
                <p className="font-medium">{price} kr.</p>
              )}
            </div>
          </div>
          <div className="flex-grow"></div> 
          <button className="bg-dark-brown text-light-beige font-semibold w-full px-24 sm:px-12 py-3 mx-auto mt-6 rounded-sm uppercase tracking-widest">
            View
          </button>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
