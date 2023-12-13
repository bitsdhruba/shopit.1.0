import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/slices/Slice';



function MoreProductDetail({detail}) {
  
  const {Cart} = useSelector((state)=> state);
  const dispatch = useDispatch();

  console.log("Ptinting in more product detail", Cart);

  function addToCartHandler(){
    dispatch(addToCart(detail));
  }

  
  return (
    <div className="w-3/5 h-full bg-gray-300 shadow-md m-auto flex">
      <div className="m-5 w-1/2 h-full">
        <div>
          <img
            src={detail.thumbnail}
            alt={detail.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          {Cart.some((item) => item.id === detail.id) ? (
            <div>
              <Link to="/cart">
                <button className="h-10 w-1/3 mt-3 mx-10 text-2xl bg-yellow-600 rounded-sm font-medium">
                  Go to Cart
                </button>
              </Link>
              <Link to="/cart">
                <button className="h-10 w-1/3 mt-3 mx-10 text-2xl bg-yellow-600 rounded-sm font-medium">
                  Buy Now
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <button
                onClick={addToCartHandler}
                className="h-10 w-1/3 mt-3 mx-10 text-2xl bg-yellow-600 rounded-sm font-medium"
              >
                Add to Cart
              </button>
              <Link to="/cart">
                <button
                  onClick={addToCartHandler}
                  className="h-10 w-1/3 mt-3 mx-10 text-2xl bg-yellow-600 rounded-sm font-medium"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-2xl">{detail.title}</h1>
        <h1 className="  mt-2">
          <span className="bg-green-500 text-white text-ms px-1">
            {detail.rating}
          </span>{" "}
          Ratings
        </h1>
        <h3 className="text-2xl font-medium mt-2">₹ {detail.price}</h3>
        <h3 className="text-md mt-1">
          Discount{" "}
          <span className="text-green-500">{detail.discountPercentage}</span> %
        </h3>
        <h3 className="text-lg text-red-600  mt-2">Stock {detail.stock}</h3>
        <h3 className="text-xl  mt-2">{detail.brand}</h3>
        <p className="text-md  mt-2">{detail.description}</p>
      </div>
    </div>
  );
}

export default MoreProductDetail;