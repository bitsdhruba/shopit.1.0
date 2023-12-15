import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


export default function NavBar() {

  const{searchHandler} = useContext(AppContext);

  function onchangeHandler(event){
    searchHandler(event);
  }

  return (
    <div className="w-full h-20 bg-black text-white fixed top-0">
      <nav className="flex items-center justify-between w-3/5 h-20 m-auto ">
        <NavLink to="/">
          <h1 className="text-2xl font-lg">ShopIt</h1>
        </NavLink>

        <input
          type="text"
          name="search" 
          placeholder="Search a Category"
          onChange={onchangeHandler}
          className="rounded-xl h-10 w-3/5 bg-slate-600 p-2 m-1 text-xl text-center"
        />

        <ul className="flex">
          <NavLink to="/">
            <li className="mx-3">Home</li>
          </NavLink>
          <NavLink to="/cart">
            <li className="mx-3">Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
