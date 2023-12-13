import React from 'react'
import { removeFromCart } from '../../redux/slices/Slice';
import { useDispatch } from 'react-redux';

function CartItem({item}) {
  
  const dispatch = useDispatch();

  function removeItemHandler(){
    dispatch(removeFromCart(item.id));
  }
  
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <button onClick={removeItemHandler}>Remove Item</button>
      </div>
    </div>
  )
}

export default CartItem;
