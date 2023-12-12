import React, { useEffect, useState } from 'react'
import MoreProductDetail from '../components/Products/MoreProductDetail';
import { useLocation } from 'react-router-dom';


function ProductDetail() {
  
  const baseUrl = "https://dummyjson.com/products";
  const [detail, setDetail] = useState([]);
  const location = useLocation();
  const productId = location.pathname.split('/').at(-1);

  async function fetchDetail(){

    try {
      const productUrl = `${baseUrl}/${productId}`;
  
      const res = await fetch(productUrl);
      const response = await res.json();
  
      setDetail(response);
      
    } catch (error) {
      console.log("something went wrong.", error);
    }
  }

  useEffect(()=>{
    fetchDetail();
  }, []);
  
  return (
    <div>
      <MoreProductDetail detail={detail}/>
    </div>
  )
}

export default ProductDetail;
