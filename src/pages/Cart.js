import React, { useEffect, useState } from "react";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const Cart = useSelector((state) => state.Cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(Cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [Cart]);

  return (
    <div className="mt-24 max-w-[1200px] mx-auto">
      <h1 className="text-4xl font-medium text-center mb-10">My Cart</h1>

      {Cart.length > 0 ? (
        <div className="sm:flex sm:justify-between">
          <div className="mb-20 sm:w-1/2">
            {Cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
          <div className="sm:w-1/3 ">
            <div className="hidden sm:block w-full p-3 bg-slate-200 rounded-lg shadow-md shadow-slate-300">
              <h2 className="flex justify-between">
                <span className="text-xl text-slate-600">Bag Total</span>
                <span>$ {totalAmount}</span>
              </h2>
              <h2 className="flex justify-between">
                <span className="text-xl text-slate-600">Bag Items</span>
                <span>{Cart.length}</span>
              </h2>
            </div>
            <div className="w-full p-3 flex justify-between items-center fixed bottom-0 bg-slate-300 rounded-md sm:top-[8rem] sm:mt-4 sm:sticky">
              <span className="text-2xl font-medium text-green-600 ">
                $ {totalAmount}
              </span>
              <button className=" p-2 text-xl text-white bg-blue-400 rounded-lg shadow-lg">
                Proceed To Pay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
          <h1 className="text-2xl">Looks like your Cart is Empty</h1>
          <Link to="/">
            <button className="w-[150px] h-[48px] my-4 p-2 shadow-slate-300 rounded-lg shadow-lg bg-blue-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
