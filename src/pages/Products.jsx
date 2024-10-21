import { useEffect, useState } from "react";
import Product from "../components/Product";


const Products = () => {
    const [products,setProducts] = useState([]);


    useEffect(() => {
     const getProducts=async()=>{

        try {
            // Fetching products from the API
            const response = await fetch('https://fakestoreapi.com/products');
    
            // Checking if the response is okay (status 200-299)
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
    
            // Parsing the JSON response
            const productsData = await response.json();
            setProducts(productsData);
    
            // Logging the products to the console
            console.log(products);
          } catch (error) {
            // Handling and logging any errors
            console.error('Failed to fetch products:', error);
          }


     }
     getProducts();
      },[]);
      





    return ( 

        <div>
            <h1  className="text-center">All products from products</h1>
            <div className="grid grid-cols-4">
      {/* Render the products or a loading message */}
      {products.length > 0 ? (
        products.map((product) => (

          <div className=""> 
            <Product product={product}></Product>
          </div>

       



        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
        </div>
     );
}
 
export default Products;