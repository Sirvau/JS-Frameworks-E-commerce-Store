import React, { useEffect, useState } from 'react';

const url = 'https://v2.api.noroff.dev/online-shop';

function ProductList() {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(false); 

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false); 
        setIsLoading(true); 
        const response = await fetch(url);
        const json = await response.json();
        console.log(json); 
        setProducts(json.data);
        setIsLoading(false); 
      } catch (error) {
        setIsLoading(false);
        setIsError(true); 
      }
    }

    getData();
  }, []);

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
