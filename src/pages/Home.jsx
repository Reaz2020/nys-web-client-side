
import Products from "./Products";
const Home = ({handleAddClickProduct}) => {


    return ( 
        <>
  
          <div className="min-h-56  text-center ">

        
        
             <Products handleAddClickProduct={handleAddClickProduct}></Products>
         </div>
          
         
     
        </>
     );
}
 
export default Home;