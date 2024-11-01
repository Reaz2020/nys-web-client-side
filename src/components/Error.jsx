import { useRouteError, Link } from "react-router-dom";

const Error = () => {

  const error = useRouteError();
    // console.log(error)
    
    return ( <div>


        <h1 className="flex justify-center items-center text-5xl mt-48">Oops!! Not pa page </h1>
       <h1 className="flex justify-center items-center text-5xl" >{error.statusText || error.massage} </h1>
       <div className="flex justify-center items-center text-5xl" >
       <Link to='/products'><button className="btn">go back</button></Link>
       </div>

    </div> );
}
 
export default Error;