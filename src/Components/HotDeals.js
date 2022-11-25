import React from 'react';
import useProduct from '../Hooks/useProduct';
import image from "../Images/c-d-x-PDX_a_82obo-unsplash.jpg"

const HotDeals = () => {

    const [products] = useProduct();

    return (
        <div>
            <div className='grid grid-cols-12 items-center mt-14 mb-16'>
                <div className='col-span-5'>
                    <h2 className='hotDeailsTitle'>We picked some <span className='text-primary font-bold'>cool things</span> for you!</h2>
                </div>
                <div className='col-span-7'>
                    <h3 className='text-2xl font-semibold dashedBorder pb-2'>hot deals for you</h3>
                    <div className='grid grid-cols-3 gap-x-16 gap-y-4 mt-7'>
                        {products.slice(0, 6).map(product => <div>
                            <img src={product.picture} alt="" />
                            <h3 className='text-xs mt-[5px] font-semibold text-secondary'>{product.name}</h3>
                            <div className='flex justify-between'>
                                <p className='text-xs mt-[5px] text-secondary'>${product.price}</p>
                                <p className='text-xs disCountColor mt-[5px]'>-{product.discount} off</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className='mb-16'>
                <img className='image' src={image} alt="" />
            </div>
        </div>
    );
};

export default HotDeals;