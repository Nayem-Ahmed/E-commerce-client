import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const shopCategory = () => {
    const { all_products } = useContext(ShopContext);
    console.log(all_products);
    return (
        <div>
        </div>
    );
};

export default shopCategory;