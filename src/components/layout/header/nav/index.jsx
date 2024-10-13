import { NavLink } from "react-router-dom";
import ContactIcon from "../contact";

  import ShoppingBagIcon from "../shoppingbag";



function Nav() {
  return (
    <nav className="flex flex-row">
      <ul className="flex flex-row me-2 sm:me-0">
        <li className="hover:scale-105 duration-200 me-4" >
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
