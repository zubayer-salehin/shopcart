import React from 'react';
import useProduct from '../Hooks/useProduct';
import image from "../Images/c-d-x-PDX_a_82obo-unsplash.jpg"

const SearchItems = () => {

    const [products] = useProduct();

    return (
        <div className='customContainer mb-8'>
            <h3 className='text-2xl font-semibold dashedBorder pb-2'>Your searched items</h3>
            <div className='grid grid-cols-6 gap-x-16 gap-y-4 mt-7 mb-14'>
                {products.slice(0, 6).map(product => <div>
                    <img src={product.picture} alt="" />
                </div>)}
            </div>
            <div>
                <img className='image' src={image} alt="" />
            </div>
        </div>
    );
};

export default SearchItems;