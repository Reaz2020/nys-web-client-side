import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <section>

      {/* <div className='container mx-auto'>

      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

      </div> */}


          <nav className="navbar shadow-md p-4  flex justify-between ">
    
         <div className='text-center flex gap-4'> 
           <Link to="/" className="text-lg border-2 p-2 rounded-xl hover:bg-lime-200 bg-white border-lime-500">Home </Link>
           <Link to="/About" className="text-lg border-2 p-2 rounded-xl  hover:bg-lime-200 bg-white border-lime-500">About-us</Link>
           <Link to="/About" className="text-lg border-2 p-2 rounded-xl  hover:bg-lime-200 bg-white border-lime-500">Contact-us</Link>
           <Link to="/About" className="text-lg border-2 p-2 rounded-xl  hover:bg-lime-200 bg-white border-lime-500">Stores</Link>
         </div>
         <div className='flex gap-2'>
          <input type="text" placeholder='search'  className='rounded-xl w-80 h-8 p-2  border-2 border-lime-500 '/>

            <div className='border-2'> 
               icon
            </div>
         </div>

    </nav>






    </section>
   
    


  );
};

export default Navbar;
