import ProductList from "../../components/products/product-listing"



function HomePage() {
    return ( 
    <div >
     <div className="ps-20">
     <h1 className="uppercase text-2xl md:text-3xl tracking-wide">Products</h1>    
     <hr className="mb-5"></hr>
     </div>
      
      <ProductList/>

    </div>
   
    )
  }
export default HomePage 