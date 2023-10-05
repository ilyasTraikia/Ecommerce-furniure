import React, { useEffect, useState } from 'react'
import axios from '../api/axios';

const useProducts = () => {


    const [productsData, setProductsData] = useState([{}]);
    const [products,setProducts] = useState(productsData)


    useEffect(() => {

        let isMounted = true;
        const controller = new AbortController();
    
        const getProducts = async () => {
            try {
         
                const response = await axios.get('/api/products', {
                    signal: controller.signal
                });
        
                isMounted && setProductsData(response.data);
                isMounted && setProducts(response.data);
            
            } catch (err) {
                console.error(err);
               // navigate('/login', { state: { from: location }, replace: true });
            }
        }
    
        getProducts();
    
        return () => {
          isMounted = false
          isMounted && controller.abort()
        }
    }, [])







  return  {   productsData,products,setProducts }
   
  
}

export default useProducts