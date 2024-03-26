import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../API/products';

const Men = () => {
    const [menProducts, setMenProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts(); // Fetch data from the API
                // Filter products for men category
                const menProductsData = productsData.filter(product => product.category === 'men');
                setMenProducts(menProductsData); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <div>
            <h2>Men's Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8 items-center justify-center p-5 my-5">
                {menProducts?.map(men => (
                    <div key={men.id} className="bg-white hover:shadow-lg overflow-hidden">
                        <img src={men?.image} alt={men?.name} className=" w-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-md  text-gray-800 mb-2">{men?.name.length > 30 ? `${men?.name.slice(0, 39)}...` : men?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${men?.new_price}</span>
                                {men?.old_price && (
                                    <span className="text-sm text-gray-500 line-through">${men?.old_price}</span>
                                )}
                            </div>
                            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">
                        Add to Cart
                    </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Men;
