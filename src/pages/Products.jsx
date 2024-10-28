import { useEffect, useState } from "react";
import Product from "../components/Product";

import Cart from "../components/Cart";
import { addToCart } from "../javaScript/functions";

const Products = ({ handleAddClickProduct }) => {
  const [products, setProducts] = useState([]);
  const [addClickedProducts, setAddClickedProducts] = useState([]);
  // const [isActive,setIsActive]=useState({
  //     cart:true,
  //     status:'cart'
  // })

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Fetching products from the API
        const response = await fetch("https://fakestoreapi.com/products");

        // Checking if the response is okay (status 200-299)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // Parsing the JSON response
        const productsData = await response.json();
        setProducts(productsData);

        // Logging the products to the console
        // console.log(products);
      } catch (error) {
        // Handling and logging any errors
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  function handleAddClickProduct(id) {
    //this function is implemented underneath to fetch a single product ,
    getProduct(id);
    //single product prices are set in the state above and will be saved in the cart in local storage
  }

  const getProduct = async (id) => {
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
      setAddClickedProducts((prevClickedProducts) => [
        ...prevClickedProducts,
        product.price,
      ]);
      addToCart(product.price);
      //alert('added  products : '+addClickedProducts)

      // Logging the products to the console
      console.log(products);
    } catch (error) {
      // Handling and logging any errors
      console.error("Failed to fetch products:", error);
    }
  };

  // //cart status
  // const handleCart = (status) => {
  //   !isActive.cart
  // }

  return (
    <section className="w-full">
      <div className=" flex flex-col justify-center items-center border-2 mx-4">
        <div className="flex flex-row items-center w-full">
          <h1 className="flex-1 text-3xl font-bold">Popular Products</h1>
          <p className="btn">Eplore More</p>
        </div>
        <div className="grid grid-cols-5">
          {/* Render the products or a loading message */}
          {products.length > 0 ? (
            products.map((product) => (
              <div className="">
                <Product
                  key={product.id}
                  product={product}
                  handleAddClickProduct={handleAddClickProduct}
                ></Product>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
