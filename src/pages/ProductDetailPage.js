import MoreProductDetail from "../components/Products/MoreProductDetail";
import { useLocation } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "../components/Spinner";


function ProductDetail() {
  const { load, setLoad } = useContext(AppContext);
  const baseUrl = "https://dummyjson.com/products";
  const [detail, setDetail] = useState([]);
  const location = useLocation();
  const productId = location.pathname.split("/").at(-1);

  async function fetchDetail() {
    setLoad(true);

    try {
      const productUrl = `${baseUrl}/${productId}`;

      const res = await fetch(productUrl);
      const response = await res.json();

      setDetail(response);
    } catch (error) {
      console.log("something went wrong.", error);
    }

    setLoad(false);
  }

  useEffect(() => {
    if (productId) {
      fetchDetail();
    }
  }, [location.pathname]);

  return (
    <div className="mt-20 min-h-full bg-slate-200">
      {load ? (
        <>
          <p>Loading...</p> <Spinner />{" "}
        </>
      ) : (
        <MoreProductDetail detail={detail} />
      )}
    </div>
  );
}

export default ProductDetail;
