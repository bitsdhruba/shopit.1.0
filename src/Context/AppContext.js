import React from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const url = (skip) => `https://dummyjson.com/products?limit=10&skip=${skip}`;

  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);

  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState();

  async function fetchProducts(skip) {
    setLoad(true);
    try {
      const res = await fetch(url(skip));
      const response = await res.json();

      setProducts(response.products);
      setTotal(response.total);
    } catch (error) {
      console.log("Something went wrong, sorry", error);
    }
    setLoad(false);
  }

  const [query, setQuery] = useState("");

  function searchHandler(event) {
    setQuery(event.target.value);
  }

  const value = {
    products,
    setProducts,
    fetchProducts,
    load,
    setLoad,
    searchHandler,
    query,
    skip,
    setSkip,
    total,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
