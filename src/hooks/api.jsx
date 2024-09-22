import { useState, useEffect } from 'react';

function useApi (url) {
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
    }, [url]);
    return { products, isLoading, isError };
}

export default useApi