import useApi from '../../../hooks/api';
import { useParams } from 'react-router-dom';
import ReviewList from '../product-reviews/review-list';
import { useCart } from '../../../context/cart-context'; 
import Button from '../../button';

function IndividualProduct() {
  let { id } = useParams();
  const { data: product, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );

  const { addToCart } = useCart(); 

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, image, description, price, discountedPrice, reviews } = product;

 
  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount ? ((price - discountedPrice) / price) * 100 : 0;

  
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); 
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center mt-20 md:mx-10 lg:mx-16 xl:mx-20 shadow-md bg-light-beige ">
        <div className="w-80 ">
          <img className="h-[320px] sm:h-[380px] w-full object-cover brightness-90" src={image.url} alt={image.alt || title} />
          {hasDiscount && (
            <p className="bg-dark-brown text-light-beige p-2 self-center text-center tracking-wide">
              {discountPercentage.toFixed()}% OFF
            </p>
          )}
        </div>
        <div className="mt-6 sm:flex sm:flex-col sm:justify-center mx-6 sm:mx-8 md:mx-12 sm:mt-28">
          <h2 className="uppercase text-2xl tracking-wide ">{title}</h2>
          <p className="font-medium mt-2 sm:mt-6 ">{description}</p>
          <div className="flex justify-around mt-6 sm:mt-12">
            {hasDiscount ? (
              <>
                <p className="font-semibold text-red-400">{discountedPrice} kr.</p>
                <p className="line-through font-medium">{price} kr.</p>
              </>
            ) : (
              <p>{price} kr.</p>
            )}
          </div>
          <Button text="Add to bag" onClick={handleAddToCart} className={"mt-12"} />
        </div>
      </div>
      <section className="mt-32 py-6 bg-md-beige">
        <h1 className="uppercase text-2xl ps-6">Reviews</h1>
        <hr className="my-4 border-oak-brown opacity-30"></hr>
        <div className="mx-6"><ReviewList reviews={reviews} /></div>
      </section>
    </div>
  );
}

export default IndividualProduct;
