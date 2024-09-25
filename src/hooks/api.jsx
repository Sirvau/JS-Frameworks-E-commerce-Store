import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(false); 

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false); 
        setIsLoading(true); 
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data); 
        setIsLoading(false); 
      } catch (error) {
        setIsLoading(false);
        setIsError(true); 
      }
    }

    getData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useApi;
