import ProductCard from '../product-card'; 
import useApi from '../../../hooks/api';
import ProductFilter from '../product-filter-search';




function ProductList() {
  const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found</div>;
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
