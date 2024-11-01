import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import Charts from "../components/charts";


const Product = ({product,handleAddClickProduct}) => {

   const {id,title,price,image}=product;


    return ( 


        <>
            <div className=" border-2 rounded-lg  flex flex-col justify-center items-center my-4 p-4 mx-2">
            <h2 key={product.id}>title: {product.title}</h2>
            <img className="w-48" src={product.image} alt="" />
            <p className='border-2 p-2'>price: {product.price}</p>
            <button className='btn bg-green-300'><Link to={`/Product/${id}`}>  Show details </Link></button>
         <div className='flex gap-2 my-2'>
         <button className='btn birder-2 border-orange-400 bg-orange-600' >add to favorite </button>
         <button className='btn birder-2 bg-lime-600' onClick={()=>handleAddClickProduct(product.id)}>add to basket </button>
        
         </div>
           
            </div>

            {/* <Charts></Charts> */}
           


         
        </>
     );
}
 
export default Product;