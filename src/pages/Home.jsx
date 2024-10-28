
import Products from "./Products";

const Home = ({isActive}) => {
    


    return ( 
        <>
  <div className="flex">

  <div className=" text-center ">
        
        <Products isActive={isActive}></Products>
    </div>
   
  </div>
          
         
     
        </>
     );
}
 
export default Home;