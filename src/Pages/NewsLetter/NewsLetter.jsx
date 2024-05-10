import React from 'react';

const NewsLetter = () => {
    return (
        <div style={{
             background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
            padding:'80px'
        }} className="md:px-8 my-6 ">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mb-6">Stay updated with our latest news, products, and promotions by subscribing to our newsletter.</p>
                <form className="flex flex-col md:flex-row justify-center max-w-lg mx-auto">
                    <input type="email" className="w-full md:w-3/4 py-3 px-4 mb-2 md:mb-0 rounded-full focus:outline-none focus:ring-2 focus:ring-[#eb2f06]" placeholder="Enter your email address" />
                    <button type="submit" className="bg-black text-white py-3 px-6 md:ml-2 rounded-full hover:bg-white hover:text-black font-medium">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
