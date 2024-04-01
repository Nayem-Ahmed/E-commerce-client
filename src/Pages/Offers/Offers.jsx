import React from 'react';
import bg from '../../assets/off_bg.png';
import exclusive2 from '../../assets/exclu.png';

const Offers = () => {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('${bg}')` }}>
            <div className='flex flex-col md:flex-row justify-between items-center md:w-10/12 mx-auto'>
                <div className="text-center md:text-left mb-3 md:mb-0 mt-5 md:mt-0">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3  ">Exclusive Offers For You</h1>
                    <p className="text-base md:text-lg mb-4  ">ONLY ON BEST SELLERS PRODUCTS</p>
                    <button className="bg-transparent text-black md:px-6 md:py-2 p-2 md:p-1 ml-2 rounded-md border border-black hover:bg-black hover:text-white focus:outline-none focus:bg-black focus:text-white">
                        Check Now!
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img className='w-80 mx-auto' src={exclusive2} alt="Exclusive" />
                </div>
            </div>
        </div>
    );
};

export default Offers;
