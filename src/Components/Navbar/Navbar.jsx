import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/e-logo.png';
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const { user, logOut } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <nav className="navbar z-50 relative shadow-md">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img className='max-w-44 h-10' src={logo} alt="Logo" /></Link>
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
                    <li><NavLink to="/shop" onClick={closeMenu}>SHOP</NavLink></li>
                    <li><NavLink to="/men" onClick={closeMenu}>MEN</NavLink></li>
                    <li><NavLink to="/women" onClick={closeMenu}>WOMEN</NavLink></li>
                    <li><NavLink to="/kids" onClick={closeMenu}>KIDS</NavLink></li>
                    <li><NavLink to="/blog" onClick={closeMenu}>BLOG</NavLink></li>
                    <li><NavLink to="/contactus" onClick={closeMenu}>CONTACT US</NavLink></li>
                    <li><Link to="/cart" onClick={closeMenu}>
                        <div className='flex items-center'>
                            <IoCartOutline className='text-2xl'>
                            </IoCartOutline>
                            <span className='relative -mt-8 bg-[#fed700] h-5 w-5 rounded-full text-center leading-[20px]'>0</span>

                        </div>
                    </Link></li>

                    <Link to='/login' onClick={closeMenu}>
                        <button className="font-semibold py-2 px-5 rounded-3xl border">
                            LOGIN
                        </button>
                    </Link>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;