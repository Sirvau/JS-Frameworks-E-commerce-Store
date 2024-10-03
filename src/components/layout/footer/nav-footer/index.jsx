import { NavLink } from "react-router-dom"

function NavFooter() {
    return (
     <ul className="flex space-x-6 text-md tracking-wide font-semibold">
      
      <li className="hover:scale-105 hover:underline"><NavLink to="/"> Home
      </NavLink></li>
      <li className="hover:scale-105 hover:underline">
      <NavLink to="/contact"> Contact
      </NavLink>
      </li>
    </ul>
    )
  }
export default NavFooter  