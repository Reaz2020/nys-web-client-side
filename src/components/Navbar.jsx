import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Hero from './Hero';

const Navbar = () => {
    const [openShopingCart ,setOpenShopingCart ]=useState(false);
    function handleOpenShopingCart (){
        setOpenShopingCart (!openShopingCart )
    }
    console.log(openShopingCart );

    return (
    <div className=' '>

<section >
           

<nav className="navbar shadow-md p-4 flex justify-between ">
<div className='text-center flex gap-4'>
   <Link to="/" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Home</Link>
   <Link to="/about" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">About Us</Link>
   <Link to="/contact" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Contact Us</Link>
   <Link to="/products" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Products</Link>
   <Link to="/login" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Login/Register</Link>
   
   
</div>
<div className='flex gap-2'>
   <input type="text" placeholder='Search' className='rounded-xl w-80 h-8 p-2 border-2 border-lime-500' />
   <div>
       <Link to="" className="flex items-center" onClick={handleOpenShopingCart }>
           <p className='text-red-400'>1</p>
           <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
       </Link>
   </div>
</div>
</nav>
     
       </section>
        {/* <Hero></Hero> */}
 
      <section className='flex  top-30 border-2 '>

   <div className={`border-4 p-2 absolute right-0 opacity-90 flex justify-between ${!openShopingCart ? '-top-96' : 'top-16'} shadow-lg rounded-lg border-blue-700 bg-grey-300 min-h-96 w-[21rem] duration-1000`}>
       {/* Your content here */}
       <div className='bold text-red-600'>Products 
       



       </div>
       <div className='bold text-red-600'> Prices 

       </div>
       <hr />
   </div>

       </section>
    </div> 
        
    );
};

export default Navbar;

{/* <nav className="navbar shadow-md p-4 flex justify-between">
    <div className='text-center flex gap-4'>
        <Link to="/" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Home</Link>
        <Link to="/About" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">About Us</Link>
        <Link to="/Contact" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Contact Us</Link>
        <Link to="/Stores" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Stores</Link>
    </div>
    <div className='flex gap-2'>
        <input type="text" placeholder='Search' className='rounded-xl w-80 h-8 p-2 border-2 border-lime-500' />
        <div>
            <Link to="" className="flex items-center" onClick={alert}>
                <p className='text-red-400'>1</p>
                <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
            </Link>
        </div>
    </div>
</nav> */}



