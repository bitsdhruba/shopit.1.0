import React from "react";
import { Link } from "react-router-dom";

function ProductDetail({ product }) {
  return (
    <div className="bg-gray-300 h-[300px] w-[200px] p-2 rounded-lg shadow-slate-400 shadow-md">
      <div className="">
        <Link to={`/productDetailPage/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover aspect-square"
          />
        </Link>
      </div>
      <div className="">
        <h1 className="text-xl font-medium mt-3">
          <Link to={`/productDetailPage/${product.id}`}>
            {product.title.length > 17
              ? product.title.slice(0, 17)
              : product.title}
          </Link>
        </h1>

        <span className="text-md bg-green-500 text-white px-2 mt-3 rounded-md">
          {product.rating}
        </span>
        <p className="mt-2">
          <span className="text-lg font-bold ">$ {product.price}</span>
          <span className="text-md  text-green-500 ml-3">
            {product.discountPercentage} % off
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
