import React, { useContext, useEffect } from "react";
import Products from "../components/Products/Products";
import { AppContext } from "../Context/AppContext";
import Spinner from "../components/Spinner";
import Pagination from "../components/Products/Pagination";

function Home() {
  const { fetchProducts, load, total, skip } = useContext(AppContext);

  const page = total ? total / 10 : "";

  useEffect(() => {
    fetchProducts(skip);
  }, [skip]);

  return (
    <div className="max-w-[1200px] min-h-screen mx-auto">
      {load ? (
        <div className="flex items-center justify-center mt-40">
          <Spinner />
        </div>
      ) : (
        <div className="mt-20 p-2">
          <Products />
          <div className="my-12">
            <Pagination page={page} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
