import { useContext } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { AppContext } from "../../Context/AppContext";

const Pagination = ({ page }) => {
  const { skip, setSkip } = useContext(AppContext);

  const pageHandler = (pageno) => {
    setSkip(pageno * 10);
  };

  const changeHandler = (pagenav) => {
    setSkip(pagenav);
  };

  const navButton = {
    borderWidth: "2px",
    borderColor: "rgb(148 163 184)",
    borderRadius: "50%",
    padding: ".25rem",
  };
  const pageButton = {
    paddingRight: ".5rem",
    paddingLeft: ".5rem",
    borderWidth: "2px",
    borderColor: "rgb(148 163 184)",
    borderRadius: "50%",
    backgroundColor: "rgb(209 213 219)",
  };

  return (
    <div className="flex justify-between border-2 border-slate-400 rounded-xl shadow-lg shadow-slate-400 py-3">
      {skip > 0 && (
        <button
          className="bg-slate-400 text-center rounded-md border-2 border-slate-400"
          onClick={() => changeHandler(skip - 10)}
          style={navButton}
        >
          <GrFormPrevious className="text-2xl sm:text-3xl " />
        </button>
      )}

      <div className="flex justify-evenly w-full">
        {[...Array(page)].map((_, i) => {
          return (
            <button
              key={i}
              className=" text-center text-lg sm:text-xl rounded-md border-2 border-slate-400"
              onClick={() => pageHandler(i)}
              style={pageButton}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      {skip < 90 && (
        <button
          className="bg-slate-400 text-center rounded-md border-2 border-slate-400"
          onClick={() => changeHandler(skip + 10)}
          style={navButton}
        >
          <GrFormNext className="text-2xl sm:text-3xl" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
