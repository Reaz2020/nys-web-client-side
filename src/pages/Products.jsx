import { useEffect, useState } from "react";
import Product from "../components/Product";
import Category from "../components/Category";
import Cart from "../components/Cart";
import { addToCart } from "../javaScript/functions";



const Products = ({handleAddClickProduct}) => {
    const [products,setProducts] = useState([]);
    const [addClickedProducts,setAddClickedProducts] = useState([]);
   


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
      
     




    function handleAddClickProduct(id){
       //this function is implemented underneath to fetch a single product , 
        getProduct(id)
      //single product prices are set in the state above and will be saved in the cart in local storage 
     
     
    
    }
    
       const getProduct=async(id)=>{

        try {
            // Fetching products from the API
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    
            // Checking if the response is okay (status 200-299)
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
    
            // Parsing the JSON response
            const product = await response.json();
            //here i am saving them in th estate but i should first save in the local storage and bring
            setAddClickedProducts((prevClickedProducts) => [...prevClickedProducts, product.price]);
            addToCart(product.price);
            //alert('added  products : '+addClickedProducts)
    
            // Logging the products to the console
            console.log(products);
          } catch (error) {
            // Handling and logging any errors
            console.error('Failed to fetch products:', error);
          }


     }
  

    return ( 

 <>
 
 <div>
     <div className="category  bg-slate-400 flex justify-between items-center">
  
       
        <button className="rounded  btn bg-lime-300" > <Category></Category></button>
        <button className="rounded  btn bg-lime-300" onClick={alert}> <Category handleAddClickProduct></Category></button>
        <button className="rounded  btn bg-lime-300" onClick={alert}> <Category handleAddClickProduct></Category></button>

    
     </div>
 </div>
  <div className="flex mt-10">
      <section className="sideBar w-1/5 border-2 p-4 m-2">
         <div className="  bg-white min-h-full border-2">

            <h5>this div is inside the sidebar and for filtering products</h5>

         </div>
      </section>
      <section className="productSection w-4/5">
      <h1  className="text-center">All products from products</h1>
            <div className="grid grid-cols-4">
                 {/* Render the products or a loading message */}
                  {products.length > 0 ? (
                  products.map((product) => (

                    <div className=""> 
                      <Product key={product.id} product={product} handleAddClickProduct={handleAddClickProduct}></Product>
                   </div>
                  ))
                ) : (
              <p>Loading products...</p>
                 )}
            </div>
      </section>
      <section>
      <Cart></Cart>
      </section>
  </div>
 </>
     );
}
 
export default Products;