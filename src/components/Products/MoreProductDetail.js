import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/Slice";
import { BsCartCheck } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import RelatedProducts from "./RelatedProducts";

function MoreProductDetail({ detail }) {
  const Cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(addToCart(detail));
  }

  return (
    <div>
      <div className="mt-20 px-3 sm:flex">
        <div className="rounded-md p-3 flex items-center justify-center sm:w-3/5">
          <img
            src={detail.thumbnail}
            alt={detail.title}
            className="aspect-square object-contain"
            loading="lazy"
          />
        </div>
        <div className="sm:flex sm:items-center sm:justify-evenly sm:relative z-0">
          <div className="my-4">
            <h1 className="text-2xl">{detail.title}</h1>
            <h1 className="  mt-2 ">
              <span className="bg-green-500 text-white px-2 rounded-md">
                {detail.rating}
              </span>{" "}
            </h1>
            <h3 className="mt-2">
              <span className="text-2xl font-medium mt-2">
                $ {detail.price}
              </span>
              <span className="text-green-500 mx-4 text-md">
                {detail.discountPercentage} %
              </span>
              off
            </h3>
            <h3 className="text-lg text-red-600  mt-2">Stock {detail.stock}</h3>
            <h3 className="text-xl  mt-2">{detail.brand}</h3>
            <p className="text-md  mt-2">{detail.description}</p>
          </div>

          <div className="fixed bottom-0 py-3 sm:absolute w-[94%] sm:w-[90%] bg-white">
            {Cart.some((item) => item.id === detail.id) ? (
              <div className="flex justify-between">
                <Link to="/cart">
                  <BsCartCheck className="text-5xl bg-blue-300 rounded-md p-2" />
                </Link>
                <Link to="/cart">
                  <button className="text-2xl bg-blue-300 w-[160px] h-[48px] rounded-md font-medium">
                    Go to Cart
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="text-2xl bg-blue-300 w-[160px] h-[48px] rounded-md font-medium">
                    Buy Now
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex justify-between">
                <BsCartPlus
                  className="text-5xl bg-blue-300 rounded-md p-2"
                  onClick={addToCartHandler}
                />

                <button
                  onClick={addToCartHandler}
                  className="text-2xl bg-blue-300 w-[160px] rounded-md font-medium"
                >
                  Add to Cart
                </button>
                <Link to="/cart">
                  <button
                    onClick={addToCartHandler}
                    className="text-2xl bg-blue-300 w-[160px] h-[48px] rounded-md font-medium"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-16 mb-20">
        <RelatedProducts detail={detail} />
      </div>
    </div>
  );
}

export default MoreProductDetail;
