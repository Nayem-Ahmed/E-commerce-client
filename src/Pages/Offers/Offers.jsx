import React from 'react';
import exclusive from '../../assets/exclusive_image.png';
import bg from '../../assets/off_bg.png';


const Offers = () => {
    return (
        <div style={{ background: `url('${bg}')` }}>
            <div className='flex justify-between items-center  w-10/12 m-auto'>
                <div className=" ">
                    <h1 className="text-4xl font-bold mb-3">Exclusive Offers For You</h1>
                    <p className="text-lg mb-4">ONLY ON BEST SELLERS PRODUCTS</p>
                    <button className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white ">Check Now!</button>

                </div>
                <div className=" ">
                    <img className='w-72' src={exclusive} alt="Exclusive" />
                </div>
            </div>

        </div>
    );
};

export default Offers;
