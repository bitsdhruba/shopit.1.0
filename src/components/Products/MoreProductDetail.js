import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';

function MoreProductDetail({detail}) {
  
  const {addToCartHandler, buyNowHandler} = useContext(AppContext);
  
  return (
    <div>
      <img src={detail.thumbnail} alt={detail.title} />
      <h1>{detail.title}</h1>
      <h1>{detail.price}</h1>
      <h1>{detail.stock}</h1>
      <button onClick={() => addToCartHandler()}>Add to Cart</button>
      <Link to='/cart'>
        <button onClick={() => buyNowHandler()}>Buy Now</button>
      </Link>
    </div>
  );
}

export default MoreProductDetail;
