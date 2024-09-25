import useApi from '../../../hooks/api';
import { useParams } from 'react-router-dom';



function IndividualProduct() {
  let { id } = useParams();
  const { data: product, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`,
  );

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? ((product.price - product.discountedPrice) / product.price) * 100
    : 0;

  return (
    <div>
      <div>
      <h2 className="pt-4 uppercase text-center text-lg md:text-xl font-semibold">
        {product.title}
      </h2>
      <img src={product.image.url} alt={product.image.alt || product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
      <p>Rating: {product.rating}</p>
      <p>Tags: {product.tags}</p>
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
    </div>
  );
}

export default IndividualProduct;
