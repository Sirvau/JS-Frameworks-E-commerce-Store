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
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center mt-20 md:mx-10 lg:mx-16 xl:mx-20  shadow-md bg-light-beige ">
      <div className="w-80 ">
      <img className="h-[320px] sm:h-[380px] w-full object-cover" src={product.image.url} alt={product.image.alt || product.title} />
      {hasDiscount && (
            <p className="bg-dark-brown text-light-beige p-2 self-center text-center tracking-wide">
              {discountPercentage.toFixed()} % OFF
            </p>
          )}
      </div>
      <div className="mt-6 sm:flex sm:flex-col  sm:justify-center mx-6 sm:mx-8 md:mx-12 sm:mt-28">
        <h2 className="uppercase text-2xl  tracking-wide ">
        {product.title}
        </h2>
     
       
        <p className="font-medium mt-2 sm:mt-6 ">{product.description}</p>
        <hr></hr>
        <div className="flex justify-around mt-6 sm:mt-12">
        {hasDiscount ? (
              <>
                <p className="font-semibold">{product.discountedPrice} kr.</p>
                <p className="line-through font-medium">{product.price} kr.</p>
              </>
            ) : (
              <p>{product.price} kr.</p>
            )}
        </div>
        <button className="bg-oak-brown text-light-beige font-semibold px-28 sm:px-20 py-3 mx-auto my-6 mt-6 sm:mt-12 rounded-xl flex justify-self-center ">Add to bag</button>
      </div>
      </div>
  
       
   
  );
}

export default IndividualProduct;

function Reviews() {

  return (
    <div>
      <p>{product.reviews}</p>
    </div>
  );
 
}

