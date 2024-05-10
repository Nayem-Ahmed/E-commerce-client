import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="  mx-auto px-4">
                <div className="flex flex-col gap-5 md:flex-row justify-between">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            We started our journey in 2010 with the vision of providing high-quality products to our customers while ensuring excellent customer service. Over the years, we have grown into a trusted brand with a loyal customer base.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                        Our story began in a small garage, where our founder, John Doe, started crafting products with attention to detail and passion. Despite humble beginnings, our dedication to craftsmanship and innovation quickly gained recognition, and our customer base began to grow steadily.                        </p>

                        <div className="flex items-center mb-8">
                            <img src="https://cdn.corporatefinanceinstitute.com/assets/ceo-vs-cfo.jpeg" alt="CEO" className="w-24 h-24 rounded-full mr-4 object-cover" />
                            <div>
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p className="text-lg text-gray-600">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                            <div className="flex items-center mb-3">
                                <FaMapMarkerAlt className="h-6 w-6 mr-3 text-red-500 " />
                                <span className="text-lg text-gray-500">123 Main Street, New York, NY 10001</span>
                            </div>
                            <div className="flex items-center mb-3">
                                <FaEnvelope className="h-6 w-6 mr-3 text-red-500" />
                                <span className="text-lg text-gray-500">contact@example.com</span>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="h-6 w-6 mr-3 text-red-500" />
                                <span className="text-lg text-gray-500">+1 (123) 456-7890</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <img src="team-member1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Jane Doe</h4>
                            <p className="text-lg text-gray-700">Marketing Manager</p>
                        </div>
                        
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AboutUs;
