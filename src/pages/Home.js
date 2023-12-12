import React, { useContext, useEffect } from 'react'
import Products from '../components/Products/Products';
import { AppContext } from '../Context/AppContext';

function Home() {
  
const {fetchProducts, load} = useContext(AppContext);

useEffect(()=>{
    fetchProducts();
},[])

return (
    <div>
      {
        load ? (
            <p>Loading...</p>
        ) : (
            <Products/>
        )
      }
    </div>
  )
}

export default Home;
