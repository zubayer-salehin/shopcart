import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import "./AllComponents.css"

const Navbar = () => {
    return (
        <div className='customContainer'>
            <div className='grid grid-cols-2 mt-5 mb-4'>
                <h3 className='text-3xl'>
                    <span className='font-bold'>shop</span><span className='font-lights'>cart</span>
                </h3>
                <p className='flex justify-end items-center'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <span className='ml-1.5'>Sign in</span>
                </p>
            </div>
            <hr className='line' />
            <div className='flex justify-between items-center mt-4'>
                <div className='p-4 location'>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <span className='ml-1.5'>Dhaka, 1202</span>
                </div>
                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='product_name mt-4'>
                <ul className='flex justify-between'>
                    <li>Fresh</li>
                    <li>Today’s Deals</li>
                    <li>Mobiles</li>
                    <li>Gift Cards</li>
                    <li>Women Clothing</li>
                    <li>Men Clothing</li>
                    <li>Kids Clothing</li>
                    <li>Health</li>
                    <li>Pet corner</li>
                    <li>Books</li>
                    <li>Beauty</li>
                    <li>Kitchen</li>
                    <li>Bed Room</li>
                    <li>Sport</li>
                    <li>Bags</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;