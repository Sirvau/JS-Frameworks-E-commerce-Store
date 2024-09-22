import React from 'react';
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
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
             <img src={product.image.url} alt={product.image.alt || product.title} />
            <h2>{product.title}</h2>
            <p>Price: {product.discountedPrice} (original: {product.price})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
