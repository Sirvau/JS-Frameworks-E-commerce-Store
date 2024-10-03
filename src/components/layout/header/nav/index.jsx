import { NavLink } from "react-router-dom";
import ContactIcon from "../contact";

  import ShoppingBagIcon from "../shoppingbag";



function Nav() {
  return (
    <nav className="flex flex-row">
      <ul className="flex flex-row">
        <li className="hover:scale-105 duration-200" >
        <NavLink to="/contact"> <ContactIcon/>
        </NavLink>
        </li>
        <li className="hover:scale-105 duration-200" >
        <NavLink to="/checkout"> <ShoppingBagIcon/>
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
