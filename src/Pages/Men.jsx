import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../API/products';
import { Link } from 'react-router-dom';

const Men = () => {
    const [menProducts, setMenProducts] = useState([]);
    const [sortOption, setSortOption] = useState('priceLowToHigh');
    console.log(sortOption);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts(sortOption); // Fetch data from the API
                // Filter products for men category
                const menProductsData = productsData.filter(product => product.category === 'men');
                setMenProducts(menProductsData); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [sortOption]);

    const handleSortChange = async (event) => {
        const selectedOption = event.target.value; // Update sort option when changed
        setSortOption(selectedOption)

    };

    return (
        <div className='p-5'>
            <div className='flex justify-between'>
                <p>{menProducts.length} items found </p>
                <div>
                    sort by :
                    <select onChange={handleSortChange} className='border py-2 px-3 rounded-full'>
                        <option value="">Select</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                        <option value="priceHighToLow">Price High to Low</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8 items-center justify-center  my-5">
                {menProducts?.map(men => (
                    <Link to={`/men_details/${men._id}`} key={men.id} className="bg-white hover:shadow-lg overflow-hidden">
                        <img src={men?.image} alt={men?.name} className=" w-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-md  text-gray-800 mb-2">{men?.name.length > 30 ? `${men?.name.slice(0, 39)}...` : men?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${men?.new_price}</span>
                                {men?.old_price && (
                                    <span className="text-sm text-gray-500 line-through">${men?.old_price}</span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Men;

