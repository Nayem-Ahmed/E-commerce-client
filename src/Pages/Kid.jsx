import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../API/products';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight ,MdAddShoppingCart} from 'react-icons/md';
 

const Kid = () => {
    const [kidsProducts, setKidsProducts] = useState([]);
    const [sortOption, setSortOption] = useState('priceLowToHigh');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts(sortOption); // Fetch data from the API
                // Filter products for men category
                const kidProductsData = productsData.filter(product => product.category === 'kid');
                setKidsProducts(kidProductsData); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, [sortOption]); // Empty dependency array to run the effect only once when the component mounts

    const handleSortChange = async (event) => {
        const selectedOption = event.target.value; // Update sort option when changed
        setSortOption(selectedOption)

    };
    return (
        <div className='p-5'>
            <div className='flex items-center gap-2 mb-8 text-sm '>
                <Link className='hover:text-[#eb2f06]' to='/'>Home</Link><MdOutlineKeyboardArrowRight/>Shop<MdOutlineKeyboardArrowRight /><Link className='hover:text-[#eb2f06]'>{kidsProducts[0]?.category}</Link>
            </div>
            <div className='flex justify-between'>
                <p>{kidsProducts?.length} items found of <span className='text-[#eb2f06]'>"{kidsProducts[0]?.category}"</span></p><div>
                    sort by :
                    <select onChange={handleSortChange} className='border py-2 px-3 rounded-full'>
                        <option value="">Select</option>
                        <option value="priceHighToLow">Price High to Low</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8 items-center justify-center group  my-5">
                {kidsProducts?.map(kid => (
                    <Link to={`/kid_Details/${kid._id}`} key={kid.id} className="bg-white shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-110">
                        <img src={kid?.image} alt={kid?.name} className=" w-full object-cover" />
                        <div className="p-4">
                            <h2 className=" text-gray-800 mb-2">{kid?.name}</h2>
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