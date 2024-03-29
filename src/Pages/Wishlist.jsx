import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addCart, getWishList } from '../API/products';
import useAuth from '../API/useAuth';
import { MdAddShoppingCart } from "react-icons/md";
import { toast } from 'react-toastify';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const { user } = useAuth();
 
    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const wishlistData = await getWishList(user?.email);
                setWishlistItems(wishlistData); // Assuming wishlistData is an array of items
            } catch (error) {
                console.error(error);
            }
        };

        fetchWishlist();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    const handleaddCart = async (id) => {
        try {
            const { _id, ...detailsWithoutId } = id;
            const addCartData = {
                ...detailsWithoutId,
                quantity: id.quantity,
                email: user?.email,
            }
            await addCart(addCartData)
            toast.success('Item added to cart successfully!')
            console.log(id);
        } catch (error) {
            toast.error(error.message);
        }

    }

    return (
        <div className="mx-auto py-6 p-5  bg-gray-50 ">
            {wishlistItems.length === 0 ? (
                <p className='text-center'>Your wishlist is empty.</p>
            ) : (
                <div className="">
                    {wishlistItems?.map(item => (
                        <div key={item._id} className='flex items-center justify-between bg-white mb-3 p-5'>
                            <div className='flex gap-1'>
                                <img src={item.image} alt={item.name} className="w-20 object-cover" />
                                <p className='max-w-64'>{item.name}</p>
                            </div>
                            <p className='text-[#eb2f06] font-semibold text-xl'>${item.new_price}</p>
                            <button onClick={() => { handleaddCart(item) }} type='button' className='bg-[#eb2f06] px-5 py-2 text-white'><MdAddShoppingCart></MdAddShoppingCart></button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
