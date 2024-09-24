import React from 'react';

function ProductCard({ product }) {
  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? ((product.price - product.discountedPrice) / product.price) * 100
    : 0;

  return (
    <li className="mx-4">
      <div className="my-4 sm:mx-6 flex flex-col shadow-md w-80 sm:w-70 md:w-60">
        <img
          className="brightness-90 h-[250px] w-full object-cover sm:h-[200px]"
          src={product.image.url}
          alt={product.image.alt || product.title}
        />
        <h2 className="ps-4 pt-4">{product.title}</h2>
        <div className="flex flex-row justify-between mt-2">
          <div className="py-2 ps-4">
            {hasDiscount ? (
              <>
                <p>{product.discountedPrice} kr.</p>
                <p className="line-through">{product.price} kr.</p>
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
        <button className="bg-dark-brown text-light-beige px-5 py-4 mx-auto my-6">
          View Product
        </button>
      </div>
    </li>
  );
}

export default ProductCard;
