import React from 'react';
import men from '../../assets/men.avif';
import women from '../../assets/women.avif';
import kid from '../../assets/kid.avif';
import { Link } from 'react-router-dom';

const CategoryGallery = () => {
    // Define static category data
    const categories = [
        {
            id: 1,
            name: "Women's Clothing",
            image: women,
            link: '/women',
        },
        {
            id: 2,
            name: "Men's Clothing",
            image: men,
            link: '/men',
        },
        {
            id: 3,
            name: "Kid's Clothing",
            image: kid,
            link: '/kids',
        },
    ];

    return (
        <div className=" mx-auto p-5">
            <h2 className="text-3xl font-semibold mb-4">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
                {categories.map((category) => (
                    <Link key={category.id} to={category.link} className="relative bg-white rounded-sm shadow-md overflow-hidden group">
                        <img src={category.image} alt={category.name} className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                            <button className="mt-4 bg-white hover:bg-black text-black hover:text-white px-4 py-2 rounded-sm border border-white transition duration-300">Shop Now</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryGallery;
