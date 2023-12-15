import React from "react";
import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider ({children}){

    const [products, setProducts] = useState([]);
    const [ load, setLoad] = useState(false);
    const url = "https://dummyjson.com/products/";

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

    const [query, setQuery] = useState('');

    function searchHandler(event){
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
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

