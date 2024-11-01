import { useLoaderData, useNavigate } from "react-router-dom";





const ProductDetails = () => {

    const navigate=useNavigate();
    function handleNavigate(){
        (navigate(-1))
    
}
    const product = useLoaderData();
   const  {title,image,price,id}=product;
    return ( 
        <div className="border-2 bg-purple-300 min-w-6 min-h-60 text-center mx-10">
           <h1 className=" border-2 text-bold text-2xl">Product title :   {title}</h1>
           <div className=" flex justify-between p-4">
           <img className="w-96" src={image} alt="" />
          <div className="">
          <h1 className=" border-2 text-bold text-2xl">Product title :   {title}</h1>
          <p className=" border-2 text-bold text-2xl">price: {price}</p>
     
          </div>
           </div>
           <button className=" btn" onClick={handleNavigate}> go back to Products</button>
           <hr />


      
        </div>
     );
}
 
export default ProductDetails ;