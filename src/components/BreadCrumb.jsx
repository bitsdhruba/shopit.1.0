import { Link, useLocation } from "react-router-dom";
import { GrNext } from "react-icons/gr";

const BreadCrumb = () => {
  const location = useLocation();

  const productpath = location.pathname.split("/").filter((x) => x);

  return (
    <div className="mt-20 max-w-[1200px] mx-auto p-3">
      {productpath.length > 0 && (
        <div className="flex">
          <Link to="/" className="hover:text-blue-400">
            <span className="flex items-center text-xl mx-2 ">
              Home <GrNext />
            </span>
          </Link>
          <span className="flex items-center text-xl mx-2">
            {productpath[0]} <GrNext />
          </span>
          <span className="text-xl mx-2">{productpath[1]}</span>
        </div>
      )}
    </div>
  );
};

export default BreadCrumb;
