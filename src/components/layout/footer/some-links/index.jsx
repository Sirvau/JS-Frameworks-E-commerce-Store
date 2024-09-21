
import { Link } from "react-router-dom";

function SomeLinks() {
    return (
      <div className="flex space-x-4">
         <Link to="https://x.com"><i className="fa-brands fa-square-x-twitter "></i>
         </Link>
         <Link to="https://facebook.com"><i className="fa-brands fa-facebook"></i>
        </Link>
      
      
     
    </div>
    )
  }
  
  export default SomeLinks;

