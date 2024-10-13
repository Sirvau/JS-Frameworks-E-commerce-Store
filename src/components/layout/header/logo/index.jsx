import { Link } from "react-router-dom";

function Logo() {
    return ( 
      <div> <Link to="/">  <h1 className="font-logo text-4xl hover:scale-105 duration-700 hover:tracking-wider" >ShopSphere</h1>
      </Link>
      </div>
    );
  }
  
  export default Logo;