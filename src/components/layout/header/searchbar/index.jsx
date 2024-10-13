

function Searchbar() {
    return ( 
      <form className="flex flex-row" >
        <input type="text" placeholder="Search product"  className="h-8 md:h-10 p-4 hidden md:block border rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-orange-950"  ></input>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8  ">
         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </form>
    );
  }
  
  export default Searchbar;        
  