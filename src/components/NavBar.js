
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


export default function NavBar() {

  const{search, changeHandler} = useContext(AppContext);

  return (
    <div>
      <nav>
        <NavLink to="/">
          <h1>ShopIt</h1>
        </NavLink>

        <input
          type="text"
          name="search"
          placeholder="Search your product"
          value={search}
          onChange={()=>changeHandler()}
        />

        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/cart">
            <li>Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
