import { useEffect } from 'react';
import { useState } from 'react';

const useProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("api.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return [products]
};

export default useProduct;