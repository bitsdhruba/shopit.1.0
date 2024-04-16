import React, { useContext, useEffect } from "react";
import Products from "../components/Products/Products";
import { AppContext } from "../Context/AppContext";
import Spinner from "../components/Spinner";

function Home() {
  const { fetchProducts, load } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-[1200px] min-h-screen mx-auto">
      {load ? (
        <div className="flex items-center justify-center mt-40">
          <Spinner />
        </div>
      ) : (
        <div className="mt-20 p-2">
          <Products />
        </div>
      )}
    </div>
  );
}

export default Home;
