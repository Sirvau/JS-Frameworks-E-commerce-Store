import Logo from "./logo";
import Nav from "./nav";



function Header() {
  return (
    <div className="flex flex-row  px-4 py-14 overflow-x-hidden justify-between">
      <div>
      <Logo />
      </div>
     <Nav/>
    </div>
  );
}

  
  export default Header;
  