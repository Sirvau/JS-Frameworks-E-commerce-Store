
import React from 'react';

const ProductDiscount = ({ price, discountedPrice }) => {
  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount ? ((price - discountedPrice) / price) * 100 : 0;

  return (
    <>
      {hasDiscount && (
        <p className="bg-dark-brown text-light-beige p-2 self-center text-center tracking-wide">
          {discountPercentage.toFixed()}% OFF
        </p>
      )}
      <div className="flex justify-around mt-6 sm:mt-12">
        {hasDiscount ? (
          <>
            <p className="font-semibold">{discountedPrice} kr.</p>
            <p className="line-through font-medium">{price} kr.</p>
          </>
        ) : (
          <p>{price} kr.</p>
        )}
      </div>
    </>
  );
};

export default ProductDiscount;
