import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <section>
            <nav className="navbar shadow-md p-4 flex justify-between">
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
            </nav>
        </section>
    );
};

export default Navbar;
