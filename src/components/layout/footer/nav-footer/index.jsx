import { NavLink } from "react-router-dom"

function NavFooter() {
    return (
     <ul className="flex space-x-6 text-sm">
      
      <li><NavLink to="/"> Home
      </NavLink></li>
      <li>
      <NavLink to="/contact"> Contact
      </NavLink>
      </li>
    </ul>
    )
  }
export default NavFooter  