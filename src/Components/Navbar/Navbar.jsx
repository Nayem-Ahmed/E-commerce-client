// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, NavLink } from 'react-router-dom';
// import './navbar.css';
// import logo from '../../assets/e-logo.png';
// import { IoPersonOutline } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     // const { user, logOut } = useAuth();

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const closeMenu = () => {
//         setIsOpen(false); // Close the menu
//     };

//     return (
//         <nav className="navbar z-50 relative shadow-sm block">
//             <div className="navbar-container">
//                 <div className="navbar-logo">
//                     <Link to="/"><img className='max-w-44 h-10' src={logo} alt="Logo" /></Link>
//                 </div>
//                 <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//                     {isOpen ? <FaTimes /> : <FaBars />}
//                 </div>
//                 <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
//                     <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
//                     <li><NavLink to="/shop" onClick={closeMenu}>SHOP</NavLink></li>
//                     <li><NavLink to="/men" onClick={closeMenu}>MEN</NavLink></li>
//                     <li><NavLink to="/women" onClick={closeMenu}>WOMEN</NavLink></li>
//                     <li><NavLink to="/kids" onClick={closeMenu}>KIDS</NavLink></li>
//                     <li><NavLink to="/blog" onClick={closeMenu}>BLOG</NavLink></li>
//                     <li><NavLink to="/contactus" onClick={closeMenu}>CONTACT US</NavLink></li>
//                     <li><Link to="/cart" onClick={closeMenu}>
//                         <div className='flex items-center'>
//                             <IoCartOutline className='text-2xl'>
//                             </IoCartOutline>
//                             <span className='relative -mt-8 bg-[#eb2f06] text-white h-5 w-5 rounded-full text-center leading-[20px]'>0</span>

//                         </div>
//                     </Link></li>

//                     <Link to='/login' onClick={closeMenu}>
//                         <button className="font-semibold py-2 flex items-center gap-1 px-5 rounded-3xl border border-black ">
//                            <IoPersonOutline className='text-xl'></IoPersonOutline> LOGIN
//                         </button>
//                     </Link>

//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/e-logo.png';
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import useAuth from '../../API/useAuth';

const Navbar = () => {
    const {logOut} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        // Here you can implement functionality to trigger search based on the entered query
    };

    return (
        <nav className="navbar z-50 relative shadow-sm block">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img className='md:max-w-44 h-10' src={logo} alt="Logo" /></Link>
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                {/* Search Input */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="search-input rounded-full"
                    />
                    {/* You can add a search button here if needed */}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
                    <li><NavLink to="/shop" onClick={closeMenu}>SHOP</NavLink></li>
                    <li><NavLink to="/men" onClick={closeMenu}>MEN</NavLink></li>
                    <li><NavLink to="/women" onClick={closeMenu}>WOMEN</NavLink></li>
                    <li><NavLink to="/kids" onClick={closeMenu}>KIDS</NavLink></li>
                </ul>
                    < Link to="/cart" onClick={closeMenu}>
                        <div className='flex items-center'>
                            <IoCartOutline className='text-2xl'>
                            </IoCartOutline>
                            <span className='relative -mt-8 bg-[#eb2f06] text-white h-5 w-5 rounded-full text-center leading-[20px]'>0</span>

                        </div>
                    </Link> 

                {/* Login Button */}
                <Link to='/login' onClick={closeMenu} className="login-link">
                    <button onClick={logOut} className="font-semibold md:py-2 py-1 px-2 flex items-center gap-1 md:px-5 rounded-3xl border border-black ">
                        <IoPersonOutline className='md:text-xl'></IoPersonOutline> LOGIN
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

