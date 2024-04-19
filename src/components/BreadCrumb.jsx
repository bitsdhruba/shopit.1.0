import { Link, useLocation } from "react-router-dom";
import { GrNext } from "react-icons/gr";

const BreadCrumb = () => {
  const location = useLocation();

  const productpath = location.pathname.split("/").filter((x) => x);

  const divStyle = {
    marginTop: "5rem",
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {productpath.length > 0 && (
        <div className="flex p-3 mt-20" style={divStyle}>
          <Link to="/" className="hover:text-blue-400">
            <span className="flex items-center text-xl mx-3">
              Home <GrNext className="mx-2" />
            </span>
          </Link>
          <span className="flex items-center text-xl mx-3">
            {productpath[0]} <GrNext className="mx-2" />
          </span>
          <span className="text-xl mx-2">{productpath[1]}</span>
        </div>
      )}
    </div>
  );
};

export default BreadCrumb;
