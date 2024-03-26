import React from 'react';
import newCollection from './newCollectiom';

const NewCollections = () => {
    return (
        <div className='p-5 my-6'>
            <h1 className='text-center text-4xl font-medium my-3'>NEW COLLECTIONS</h1>
            <hr className='h-1 md:w-1/3 mx-auto bg-gradient-to-l from-transparent via-red-500 mb-8' />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {newCollection?.map(collection => (
                    <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <div className="overflow-hidden">
                            <img
                                src={collection?.image}
                                alt={collection?.name}
                                className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">{collection?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${collection?.price}</span>
                                {collection?.old_price && (
                                    <span className="text-sm text-gray-500 line-through">${collection?.old_price}</span>
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

export default NewCollections;