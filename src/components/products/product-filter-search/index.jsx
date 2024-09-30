import { useState } from "react"
import { Link } from "react-router-dom";


function ProductFilter({products =[]}) {

const [searchTerm, setSearchTerm] = useState("");

const filterProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));



    return (
        <div className="relative w-full mx-auto max-w-xs sm:max-w-lg md:max-w-full xl:max-w-screen-2xl ">
            <div className="flex flex-row items-center">
            <input placeholder="Search for products ..." className="w-full max-w-xs sm:max-w-lg md:max-w-full xl:max-w-screen-2xl px-4 py-1 border rounded-md border-dark-brown bg-light-beige font-medium" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value.trim())} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mx-2">
             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            </div>
              

        {filterProducts.length > 0 && searchTerm.length > 0 && (
            <ul className="absolute z-20 left-0 right-0  px-4 bg-light-beige shadow-lg ">
                {filterProducts.map(product => {
                    return <li key={product.id}>
                                <Link to={`individual-product/${product.id}`} className="block p-4">{product.title}</Link>
                            </li>;
                })}
            </ul>
        )}

            </div>
        );
        }
        export default ProductFilter