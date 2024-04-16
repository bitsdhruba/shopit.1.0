import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { BsCart3 } from "react-icons/bs";

export default function NavBar() {
  const { searchHandler } = useContext(AppContext);

  function onchangeHandler(event) {
    searchHandler(event);
  }

  return (
    <div className="w-full h-20 bg-black text-white fixed top-0 z-10">
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto px-3 h-20">
        <NavLink to="/">
          <h1 className="text-2xl font-lg">ShopIt</h1>
        </NavLink>

        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={onchangeHandler}
          className="rounded-xl h-10 w-[44%] bg-slate-600 p-2 mx-1 text-xl text-center"
        />

        <ul className="flex">
          <NavLink to="/">
            <li className="mx-3 hidden sm:block">Home</li>
          </NavLink>
          <NavLink to="/cart">
            <li className="mx-3">
              <BsCart3 className="text-3xl" />
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
