
import ProductCard from '../product-card'; 
import useApi from '../../../hooks/api';


function ProductList() {
  const { products, isLoading, isError } = useApi(
    'https://v2.api.noroff.dev/online-shop',
  );

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div >
      <ul className="flex flex-col sm:flex-row flex-wrap content-center justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </ul>

    </div>
  );
}

export default ProductList;
