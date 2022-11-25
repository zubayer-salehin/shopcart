import React from 'react';
import useProduct from '../Hooks/useProduct';

const SearchItems = () => {

    const [products] = useProduct();

    return (
        <div className='mb-16'>
            <h3 className='text-2xl font-semibold dashedBorder pb-2'>Your searched items</h3>
            <div className='grid grid-cols-6 gap-x-16 gap-y-4 mt-7'>
                {products.slice(0, 6).map(product => <div>
                    <img src={product.picture} alt="" />
                </div>)}
            </div>
        </div>
    );
};

export default SearchItems;