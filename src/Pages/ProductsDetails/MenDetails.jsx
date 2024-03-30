import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { AiOutlineShareAlt } from 'react-icons/ai';
import Men from '../Men';
import { AddWishlistPost, addCart } from '../../API/products';
import { toast } from 'react-toastify';
import useAuth from '../../API/useAuth';
import { FacebookShareButton, FacebookShareCount, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { FacebookIcon } from 'react-share'
import { MdAddShoppingCart } from 'react-icons/md';

const MenDetails = () => {
    const menDetails = useLoaderData();
    const { user } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('S');
    const [showShareOptions, setShowShareOptions] = useState(false);
    const shareUrl = 'https://www.facebook.com/nayem.mdnayem.39395';


    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { _id, ...detailsWithoutId } = menDetails;
            const addCartData = {
                ...detailsWithoutId,
                size: selectedSize,
                quantity: quantity,
                email: user?.email,
            }
            await addCart(addCartData)
            toast.success('Item added to cart successfully!')
        } catch (error) {
            toast.error(error.message);
        }
    };
    const toggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
    };
    const handleWishlist = async () => {
        try {
            const { _id, ...detailsWithoutId } = menDetails;
            const addWishlist = {
                ...detailsWithoutId,
                quantity: quantity,
                email: user?.email,
            }
            await AddWishlistPost(addWishlist)
            toast.success('Item added to cart successfully!')
        } catch (error) {
            toast.error(error.message);
        }

    };

    return (
        <>
            <div className="flex flex-col md:flex-row gap-5 justify-center mx-4 my-8">
                <div className="flex flex-col md:flex hidden">
                    <img src={menDetails.image} alt="" className="w-40 h-28 mb-4" />
                    <img src={menDetails.image} alt="" className="w-40 h-28 mb-4" />
                    <img src={menDetails.image} alt="" className="w-40 h-28 mb-4" />
                </div>
                <img src={menDetails.image} alt="" className="mb-4" />
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">{menDetails?.name}</h1>
                        <div className='flex  w-11/12 justify-between'>
                            <div>*****</div>
                            <div className='flex items-center gap-3'>
                                <div className="relative inline-block text-left">
                                    <button type="button" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 focus:outline-none" onClick={toggleShareOptions}>
                                        <AiOutlineShareAlt size={20} />
                                        Share
                                    </button>
                                    {showShareOptions && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1">
                                                {/* WhatsApp */}
                                                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                    <WhatsappShareButton className='flex' url={shareUrl}>
                                                        <WhatsappIcon size={20} className="text-blue-500 mr-2" />
                                                        WhatsApp
                                                    </WhatsappShareButton>
                                                </button>

                                                {/* Facebook */}
                                                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                    <FacebookShareButton className='flex' url={shareUrl}>
                                                        <FacebookIcon size={20} className="text-blue-500 mr-2" />
                                                        Facebook
                                                    </FacebookShareButton>
                                                </button>

                                                {/* Twitter */}
                                                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                    <TwitterShareButton className='flex' url={shareUrl}>
                                                        <TwitterIcon size={20} className="text-blue-400 mr-2" />
                                                        Twitter
                                                    </TwitterShareButton>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button onClick={handleWishlist}><CiHeart className='text-2xl'></CiHeart></button>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="text-lg font-semibold text-[#eb2f06] mr-2">${menDetails.new_price}</p>
                            <p className="text-sm text-gray-500 line-through">${menDetails.old_price}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center mb-8">
                                <label htmlFor="size" className="mr-2">Size:</label>
                                <select id="size" name="size" value={selectedSize} onChange={handleSizeChange} className="border border-gray-300 rounded px-4 py-1">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="2XL">2XL</option>
                                </select>
                            </div>
                            <div className="flex items-center mb-8">
                                <label htmlFor="quantity" className="mr-2">Quantity:</label>
                                <input type="number" id="quantity" name="quantity" min="1" max={5} value={quantity} onChange={handleQuantityChange} className="border border-gray-300 rounded w-20 px-4 py-1" />
                            </div>
                            <button type="submit" className="flex items-center gap-1 bg-[#eb2f06] text-white px-4 py-2 rounded-sm hover:bg-red-800 hover:text-gray-100"><MdAddShoppingCart /> Add to Cart</button>
                        </form>
                    </div>

                </div>
            </div>
            <div onClick={window.scrollTo(0, 0)}>

                <Men></Men>
            </div>
        </>

    );
};

export default MenDetails;

