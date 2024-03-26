import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../API/products';
 
const Shop = () => {
    const [allproducts, setALLProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts(); // Fetch data from the API
                setALLProducts(productsData); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8 items-center justify-center p-5 my-5">
        {allproducts?.map(product => (
            <div key={product.id} className="bg-white shadow-md overflow-hidden">
                <img src={product?.image} alt={product?.name} className=" w-full object-cover" />
                <div className="p-4">
                    <h2 className="text-lg  text-gray-800 mb-2">{product?.name}</h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-700">${product?.new_price}</span>
                        {product?.old_price && (
                            <span className="text-sm text-gray-500 line-through">${product?.old_price}</span>
                        )}
                    </div>
                    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">
                        Add to Cart
                    </button> */}
                </div>
            </div>
        ))}
    </div>
    );
};

export default Shop;
