import React from "react";
import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider ({children}){

    const [products, setProducts] = useState([]);
    const [ load, setLoad] = useState(false);
    const url = "https://dummyjson.com/products?limit=10";

    async function fetchProducts (){
        setLoad(true);
        try {
            const res = await fetch(url);
            const response = await res.json();

            setProducts(response.products);
        } catch (error) {
            console.log("Something went wrong, sorry", error);
        }
        setLoad(false);
    }

    const [search, setSearch] = useState("");

    function changeHandler(event) {
      setSearch(event.target.value);
    }

    const [cartItem, setCartItem] = useState([]);

    function addToCartHandler(){
      console.log("item added to cart")
    }

    function buyNowHandler() {
      console.log("buy now");
    }

    const value = {
      products,
      setProducts,
      fetchProducts,
      load,
      setLoad,
      changeHandler,
      search,
      setSearch,
      addToCartHandler,
      buyNowHandler,
      cartItem,
      setCartItem,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

