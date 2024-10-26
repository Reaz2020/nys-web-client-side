import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <section>
            <div className='container mx-auto flex flex-row justify-around items-center mt-3 mb-3'>
                <div>
                    <h1 className='text-3xl text-blue-700 arima font-bold '>Item <span className='text-4xl text-yellow-400'>B</span>azaar</h1>
                    <p>Explore <span className='text-blue-400'>&</span> Buy</p>
                </div>
                {/* adding the search part */}
                <div className='w-[50%]'>
                    <label class="input input-bordered flex items-center gap-2 border-blue-400">
                        <input type="text" className="flex-1 roboto " placeholder="Search for Products, Brands and More" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70 text-blue-500">
                            <path
                                fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </label>
                </div>
                {/* adding the favourite button, login, cart button */}
                <div className='flex flex-row gap-5 items-center '>
                    <p className='flex flex-row gap-4 items-center btn border-2 border-blue-400 bg-yellow-200 '><i class="fa-solid fa-heart"></i>Whitelist</p>
                    <div class="indicator">
                        <span class="indicator-item badge badge-neutral text-[10px] text-blue-400 bg-transparent border-none font-bold text-xl">99+</span>
                        <button class="btn"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                    <p className='flex flex-row items-center gap-4 cursor-pointer font-bold btn  border-2 border-blue-400 bg-yellow-200 '><i class="fa-solid fa-user "></i>Login</p>
                </div>
            </div>
            


        </section>
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