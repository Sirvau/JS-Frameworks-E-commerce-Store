
import { Link } from "react-router-dom";

function SomeLinks() {
    return (
      <div className="flex space-x-8">
         <Link to="https://x.com"><i className="fa-brands fa-square-x-twitter scale-150 hover:scale-125 duration-500"></i>
         </Link>
         <Link to="https://facebook.com"><i className="fa-brands fa-facebook scale-150 hover:scale-125 duration-500"></i>
        </Link>
      
      
     
    </div>
    )
  }
  
  export default SomeLinks;

