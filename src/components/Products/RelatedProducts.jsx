import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import ProductDetail from "./ProductDetail";

const RelatedProducts = ({ detail }) => {
  const category = detail.category;
  const url = `https://dummyjson.com/products/category/${category}`;

  const [prodcategory, setProdcategory] = useState();
  const [load, setLoad] = useState(false);

  const fetchCategory = async () => {
    setLoad(true);
    try {
      const data = await fetch(url);
      const res = await data.json();
      setProdcategory(res.products);
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  };

  useEffect(() => {
    fetchCategory();
  }, [category]);

  return (
    <div className="border-t-2 border-slate-300">
      <h1 className="text-2xl sm:text-3xl  text-center my-4">
        You may also Like
      </h1>
      <div>
        {load ? (
          <div className="flex items-center justify-center mt-40">
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 sm:gap-8 justify-evenly">
            {prodcategory?.map((product) => {
              return <ProductDetail key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
