import Header from "./header";
import { Outlet } from "react-router-dom"
import Footer from "./footer";

function Layout() {

    return ( 
      <div className="mx-auto px-2 max font-primary text-dark-brown">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    );
  }
  
  export default Layout;
  