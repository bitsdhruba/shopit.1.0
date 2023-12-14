import React from 'react'
import { removeFromCart } from '../../redux/slices/Slice';
import { useDispatch } from 'react-redux';

function CartItem({item}) {
  
  const dispatch = useDispatch();

  function removeItemHandler(){
    dispatch(removeFromCart(item.id));
  }
  
  return (
    <div className="my-5 w-3/5 shadow-lg h-[600] w-full p-2 ">
      <div>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div>
        <div>
          <h1 className="text-2xl">{item.title}</h1>
          <h1 className="text-2xl font-medium mt-2">₹ {item.price}</h1>
          <h1>
            <span className="text-green-500">{item.discountPercentage} %</span>{" "}
            off
          </h1>
          <h1>
            <span className="bg-green-500 text-white text-ms px-1">
              {item.rating}
            </span>{" "}
            Ratings
          </h1>
          <p className="text-md  mt-2">{item.description}</p>
        </div>
        <div>
          <button onClick={removeItemHandler} className='text-blue-500 text-lg p-2 m-3'>Remove Item</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
