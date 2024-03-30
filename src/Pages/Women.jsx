import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../API/products';
import { Link } from 'react-router-dom';

const Women = () => {
    const [womenProducts, setWomenProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts(); // Fetch data from the API
                // Filter products for men category
                const menProductsData = productsData.filter(product => product.category === 'women');
                setWomenProducts(menProductsData); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array to run the effect only once when the component mounts
    return (
        <div className='p-5'>
            <div className='flex justify-between'>
                <p>{womenProducts.length} items found </p>
                <div>
                    sort by :
                    <select className='border py-2 px-3 rounded-full'>
                        <option value="">Select</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                        <option value="priceHighToLow">Price High to Low</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8 items-center justify-center  my-5">
                {womenProducts?.map(women => (
                    <Link to={`/women_details/${women?._id}`} key={women.id} className="bg-white hover:shadow-md overflow-hidden">
                        <img src={women?.image} alt={women?.name} className=" w-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg  text-gray-800 mb-2">{women?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${women?.new_price}</span>
                                {women?.old_price && (
                                    <span className="text-sm text-gray-500 line-through">${women?.old_price}</span>
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

export default Women;