import React from 'react';
import products from './productsData';
 
const Popular = () => {
    return (
        <div className='p-5 '>
            <h1 className='text-center text-4xl font-medium my-8'>POPULAR WOMEN</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center">
                {products?.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={product?.image} alt={product?.name} className=" w-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">{product?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${product?.new_price}</span>
                                {product?.old_price && (
                                    <span className="text-sm text-gray-500 line-through">${product?.old_price}</span>
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

export default Popular;
