import useApi from '../../../hooks/api';
import { useParams } from 'react-router-dom';
import ReviewList from '../product-reviews/review-list';
import { useCart } from '../../../context/cart-context'; 
import Button from '../../button';
import { LoaderAnimation } from '../../animations';
import { ErrorAnimation } from '../../animations';




function IndividualProduct() {
  let { id } = useParams();
  const { data: product, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );

  const { addToCart } = useCart(); 

  if (isLoading) {
    return <div><LoaderAnimation/></div>;
  }

  if (isError) {
    return <div className="my-20 flex flex-col justify-center items-center">
      <div>
        <ErrorAnimation/>
      <p className="text-center text-xl font-semibold">Unfortunately,</p>
      <p className="text-center text-lg font-medium mb-6 mt-2"> there was an error loading the product.</p>
      </div>
    </div>;
  }

  if (!product) {
    return <div>
    <div className="my-20 flex flex-col justify-center items-center">
      <ErrorAnimation/>
    <p className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Unfortunately,</p>
    <p className="text-center text-lg lg:text-xl font-medium mb-6 mt-2">this product was not found.</p>
  </div>
 </div>;
  }

  const { title, image, description, price, discountedPrice, reviews } = product;

 
  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount ? ((price - discountedPrice) / price) * 100 : 0;

  
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); 
  };

  return (
    <div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 sm:mx-28 md:mx-4 lg:ms-4 lg:me-16 xl:me-24 shadow-lg bg-light-beige rounded-lg">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img className="h-[380px] md:h-[400px] lg:h-[460px] xl:h-[560px] w-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" 
               src={image.url} alt={image.alt || title} />
          {hasDiscount && (
            <p className="bg-md-beige mix-blend-luminosity w-1/3 text-center tracking-wide text-dark-brown p-2 absolute top-0 right-0 z-10 rounded-bl-lg">
              {discountPercentage.toFixed()}% OFF
            </p>
          )}
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between w-full md:w-1/2 p-6 lg:p-10 text-center">
          <h2 className="uppercase text-2xl lg:text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-md lg:text-lg mb-4 font-medium">{description}</p>
          
          {/* Price Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between sm:justify-center mt-4 sm:mt-6">
            {hasDiscount ? (
              <>
                <p className="text-red-400 font-semibold text-xl sm:text-2xl">{discountedPrice} kr</p>
                <p className="line-through text-md font-medium text-gray-500 ml-4 sm:text-lg">{price} kr</p>
              </>
            ) : (
              <p className="text-xl sm:text-2xl font-medium">{price} kr</p>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            text="Add to bag" 
            onClick={handleAddToCart} 
            className="mt-6 lg:mt-8 w-full max-w-xs lg:max-w-sm self-center"
          />
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-16 lg:mt-24 py-6 bg-md-beige">
        <h1 className="uppercase text-xl md:text-2xl px-6">Reviews</h1>
        <hr className="my-4 border-oak-brown opacity-30"></hr>
        <div className="mx-6 lg:mx-12"><ReviewList reviews={reviews} /></div>
      </section>
    </div>
  );
}

export default IndividualProduct;
