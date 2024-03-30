import React from 'react';
import footerLogo from '../../assets/footer-logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-5 ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                <div className="mb-6">
                    <img src={footerLogo} alt="Footer Logo" className="mb-4 h-16" />
                    <p className="text-sm">SHOP Industries Ltd. <br /> Providing reliable tech since 1992</p>
                    <div className="mt-4 flex">
                        <a href="#" className="text-gray-400 hover:text-white mr-4"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-white mr-4"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm ">
                        <li className='mb-2'><Link to="/">HOME</Link></li>
                        <li className='mb-2'><Link to="/men">MEN</Link></li>
                        <li className='mb-2'><Link to="/women">WOMEN</Link></li>
                        <li className='mb-2'><Link to="/kids">KIDS</Link></li>
                        <li className=''><Link to="/">HOME</Link></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="text-sm">
                        <li className='mb-2'><Link to="/men">MEN</Link></li>
                        <li className='mb-2'><Link to="/women">WOMEN</Link></li>
                        <li className='mb-2'><Link to="/kids">KIDS</Link></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Clothing</a></li>


                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">123 Main Street, City, Country</p>
                    <p className="text-sm">Email: webdevnayem@gmail.com</p>
                    <p className="text-sm">Phone: +88 01936797600</p>
                </div>
            </div>

            <div className="mt-4">
                <input type="email" placeholder="Your email" className="px-4 py-2 mr-2 w-48 sm:w-auto border border-gray-800 focus:outline-none" />
                <button className="px-6 py-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none">Subscribe</button>
            </div>
            <hr className='my-5' />
            <div className="text-center">
                <p className="text-sm text-center">© {new Date().getFullYear()} SHOP Industries Ltd. All rights reserved.</p>

            </div>

        </footer>
    );
};

export default Footer;
