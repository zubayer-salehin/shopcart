import React from 'react';
import useProduct from '../Hooks/useProduct';

const TodayHotDeals = () => {

    const [products] = useProduct();

    return (
        <div className='mb-16'>
            <h3 className='text-2xl font-semibold dashedBorder pb-2'>Today’s hot deals</h3>
            <div className='grid grid-cols-5 gap-x-16 gap-y-4 mt-7'>
                {products.slice(6, 11).map(product => <div>
                    <img src={product.picture} alt="" />
                    <h3 className='text-xs mt-[5px] font-semibold text-secondary'>{product.name.slice(0, 200)}</h3>
                    <div className='flex justify-between'>
                        <p className='text-xs mt-[5px] text-secondary'>${product.price}</p>
                        <p className='text-xs disCountColor mt-[5px]'>-{product.discount} off</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default TodayHotDeals;