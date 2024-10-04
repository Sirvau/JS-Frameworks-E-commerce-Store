import ProductCard from '../product-card'; 
import useApi from '../../../hooks/api';
import ProductFilter from '../product-filter-search';
import { ErrorAnimation, LoaderAnimation } from '../../animations';




function ProductList() {
  const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

  if (isLoading) {
    return <div><LoaderAnimation/></div>;
  }

  if (isError) {
    return <div className="my-20 flex flex-col justify-center items-center">
      <div>
        <ErrorAnimation/>
      <p className="text-center text-xl font-semibold">Unfortunately,</p>
      <p className="text-center text-lg font-medium mb-6 mt-2"> there was an error loading the products.</p>
      </div>
    </div>;
  }

  if (!products || products.length === 0) {
    return <div>
        <div className="my-20 flex flex-col justify-center items-center">
          <ErrorAnimation/>
        <p className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Unfortunately,</p>
        <p className="text-center text-lg lg:text-xl font-medium mb-6 mt-2">no products were found.</p>
      </div>
      
     </div>;
  }

  return (
    <div>
       <ProductFilter products={products}/>
      <ul className="flex flex-col sm:flex-row flex-wrap content-center justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </ul>
     
    </div>
  );
}

export default ProductList;
