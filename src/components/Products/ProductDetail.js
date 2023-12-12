import React from 'react'

function ProductDetail({product}) {
  
  
  return (
    <div className='flex m-3 p-2 bg-zinc-200'>
      
      <div>
        <img src={product.thumbnail} alt={product.title}></img>
      </div>
      <div>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
      </div>
      
      <div>
        <h1>{product.price}</h1>
      </div>
    </div>
  );
}

export default ProductDetail;
