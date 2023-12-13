import React from 'react'
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cart() {
  
  const {Cart} = useSelector((state) => state);
  console.log("printing in Cart", Cart);
  
  return (
    <div>
      {Cart.length > 0 ? (
        Cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })
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
