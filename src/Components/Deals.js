import React from 'react';
import useProduct from '../Hooks/useProduct';

const Deals = () => {

    const [products] = useProduct();

    return (
        <div className='customContainer mb-16'>
            <h3 className='text-2xl font-semibold dashedBorder pb-2'>Deals on furniture</h3>
            <div className='grid grid-cols-5 gap-x-16 gap-y-4 mt-7'>
                {products.slice(11, 16).map(product => <div>
                    <img src={product.picture} alt="" />
                    <h3 className='text-xs mt-[5px] font-semibold text-secondary'>{product.name}</h3>
                    <div className='flex justify-between'>
                        <p className='text-xs mt-[5px] text-secondary'>${product.price}</p>
                        <p className='text-xs disCountColor mt-[5px]'>-{product.discount} off</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Deals;