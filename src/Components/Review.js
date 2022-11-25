import React from 'react';
import useProduct from '../Hooks/useProduct';
import "./AllComponents.css"

const Review = () => {

    const [products] = useProduct();

    return (
        <div className='customContainer mb-20'>
            <h3 className='text-2xl font-semibold dashedBorder pb-2'>Review your purchase</h3>
            <div className='grid grid-cols-2 gap-x-5 mt-7'>
                {products.slice(13, 15).map(product => <div className='grid grid-cols-2 items-center reveiwborder'>
                    <img src={product.picture} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold text-secondary'>{product.name}</h3>
                        <p className='text-xs text-secondary mt-4'>you bought it at the best price</p>
                        <p className='text-xl font-semibold mt-1.5'>{product.price}</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Review;