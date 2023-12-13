import React, { useContext, useEffect } from 'react'
import Products from '../components/Products/Products';
import { AppContext } from '../Context/AppContext';
import Spinner from '../components/Spinner';

function Home() {
  
const {fetchProducts, load} = useContext(AppContext);

useEffect(()=>{
    fetchProducts();
},[])

return (
  <div className='min-h-full w-full bg-slate-200 mt-20'>
    {load ? (
      <div>
        <p>Loading...</p>
        <Spinner/>
      </div>
    ) : (
      <Products />
    )}
  </div>
);
}

export default Home;
