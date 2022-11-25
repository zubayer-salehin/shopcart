import React from 'react';
import "./AllComponents.css"

const Footer = () => {
    return (
        <div className='bg-slate-600 text-white'>
            <div className='customContainer'>
                <div className='grid grid-cols-3 py-20'>
                    <h3 className='text-2xl'><span className='font-bold'>Shop</span>cart</h3>
                    <ul className='flex justify-around'>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Help</li>
                    </ul>
                    <div>
                        <p className='text-right'>English</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;