
import ProductList from "../../components/products/product-listing"
import HeroSection from "../../components/hero"



function HomePage() {
    return ( 
    <div className="" >
      <div className="w-full h-auto"><HeroSection/></div>
      
     <div>
     <h1 className="uppercase text-2xl mx-4 mb-6 tracking-wide">Products</h1>    
     </div>
   
      <ProductList/>

    </div>
   
    )
  }
export default HomePage 