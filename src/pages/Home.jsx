
import Products from "./Products";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Charts from "../components/charts";

const Home = ({isActive}) => {

    const navigation= useNavigation();
    


    return ( 
        <>

     <Navbar></Navbar>

     {
        navigation.state==='loading'?<p className="text-center text-3xl text-red-500 mt-20">Loading ..... </p>: <Outlet></Outlet>
     }


    
   
    {/* <Charts></Charts> */}
    
   

          
         
     
        </>
     );
}
 
export default Home;