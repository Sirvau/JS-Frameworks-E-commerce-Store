import ProductList from "../../components/products/product-listing"



function HomePage() {
    return ( 
    <div className="" >
     <div>
     <h1 className="uppercase text-2xl mx-4  tracking-wide">Products</h1>    
     <hr className="mb-5"></hr>
     </div>
      
      <ProductList/>

    </div>
   
    )
  }
export default HomePage 