import { useContext, useState } from "react";
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

  return (
    <div className="flex justify-between">
      {skip > 0 && (
        <button
          className="text-center rounded-md border-2 border-slate-400"
          onClick={() => changeHandler(skip - 10)}
        >
          <GrFormPrevious className="text-3xl " />
        </button>
      )}

      <div className="flex justify-evenly w-full">
        {[...Array(page)].map((_, i) => {
          return (
            <button
              key={i}
              className=" text-center text-xl rounded-md border-2 border-slate-400"
              onClick={() => pageHandler(i)}
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
        >
          <GrFormNext className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
