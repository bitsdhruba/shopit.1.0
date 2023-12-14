import React, { useEffect, useState } from 'react'
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cart() {
  
  const {Cart} = useSelector((state) => state);
  console.log("printing in Cart", Cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(Cart.reduce((acc, curr)=> acc + curr.price, 0));
  },[Cart]);
  
  return (
    <div className="mt-24 w-3/5 m-auto h-full">
      {Cart.length > 0 ? (
        <div className="flex ">
          <div className="">
            {Cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>

          <div className="w-2/5 h-full p-2 shadow-lg">
            <h1 className="text-4xl font-bold text-blue-500 text-center mb-10 shadow-xl">
              Cart Summery
            </h1>
            <div>
              <h1 className="text-xl  text-blue-500   ">
                Total Items :{" "}
                <span className="text-xl font-medium text-green-600">
                  {Cart.length}
                </span>
              </h1>
              <h1 className="text-xl  text-blue-500  ">
                Total Amount :{" "}
                <span className="text-xl font-medium text-green-600">
                  ₹ {totalAmount}
                </span>
              </h1>
            </div>
            <div className='flex justify-center'>
              <button className='my-20 p-2 text-2xl text-white bg-green-400 rounded-lg shadow-lg'>Proceed To Pay</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Cart is empty</p>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
