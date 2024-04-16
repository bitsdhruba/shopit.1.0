import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import ProductDetail from "../Products/ProductDetail";

function ProductsPage() {
  const { products, query } = useContext(AppContext);

  const category = [
    "smartphones",
    "laptops",
    "fragrances",
    "home-decoration",
    "skincare",
    "groceries",
  ];

  const filteredProducts = products.filter((product) => {
    return product.category.includes(query.toLowerCase());
  });

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <div className="flex flex-wrap gap-3 sm:gap-8 justify-evenly">
          {filteredProducts.map((product) => {
            return <ProductDetail product={product} key={product.id} />;
          })}
        </div>
      ) : (
        <div className="min-h-[90vh] flex flex-col justify-center items-center text-2xl bg-gray-300 shaddow-lg">
          <p className="text-3xl m-2">No Product Found, sorry :(</p>
          <p className="text-2xl m-2">Try Something from below...</p>
          <div>
            {category.forEach((product) => {
              <ul className="text-2xl shadow-sm m-2">
                <li>{product}</li>
              </ul>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
