import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../API/products';
import { Link } from 'react-router-dom';

const Kid = () => {
    const [kidsProducts, setKidsProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts(); // Fetch data from the API
                // Filter products for men category
                const kidProductsData = productsData.filter(product => product.category === 'kid');
                setKidsProducts(kidProductsData); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array to run the effect only once when the component mounts
    return (
        <div>
            <h2>Kid Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8 items-center justify-center p-5 my-5">
                {kidsProducts?.map(kid => (
                    <Link to={`/kid_Details/${kid._id}`} key={kid.id} className="bg-white shadow-md overflow-hidden">
                        <img src={kid?.image} alt={kid?.name} className=" w-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg  text-gray-800 mb-2">{kid?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${kid?.new_price}</span>
                                {kid?.old_price && (
                                    <span className="text-sm text-gray-500 line-through">${kid?.old_price}</span>
                                )}
                            </div>
                            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">
                Add to Cart
            </button> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Kid;