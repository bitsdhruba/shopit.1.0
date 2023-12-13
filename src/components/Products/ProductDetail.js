import React from 'react'

function ProductDetail({product}) {
  
  
  return (
    <div className="flex justify-between m-3 p-2 bg-gray-300 shadow-md h-[300px]">
      <div className="w-[300px] m-2 p-1">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full aspect-square object-cover"
        />
      </div>
      <div className="w-[600px]">
        <h1 className="text-3xl mx-2 mt-10">{product.title}</h1>
        <p className="text-md m-2">
          <span className='bg-green-500 text-white px-1'>{product.rating}</span> Ratings
        </p>
        <p className="text-gray-700 text-lg mx-2 mt-3">{product.description}</p>
      </div>

      <div className="w-[200px]">
        <h1 className="text-3xl font-bold mt-10">₹ {product.price}</h1>
        <p className="text-md m-2 text-green-500">
          {product.discountPercentage} % off
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
