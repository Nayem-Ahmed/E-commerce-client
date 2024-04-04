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



// Navbar.js
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/e-logo.png';
import { IoPersonOutline, IoLogOutOutline, IoCartOutline } from "react-icons/io5";
import useAuth from '../../API/useAuth';
import { MdArrowDropDown } from "react-icons/md";
import { getAllProducts, getCartData } from '../../API/products';
import { useQuery } from 'react-query';
import { RiSearchLine } from 'react-icons/ri';
import Loader from '../Loader/Loader';


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [allproducts, setALLProducts] = useState([]);


    const { data: cartData, isLoading, isError, refetch } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => getCartData(user?.email),
    });
    refetch();

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error occurred while fetching cart data</div>;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts('priceLowToHigh', search); // Fetch data from the API
                setALLProducts(productsData); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, [search]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    return (
        <nav className="navbar z-50 relative shadow-sm block">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img className='md:max-w-48 max-h-12' src={logo} alt="Logo" /></Link>
                </div>
                <div className="relative w-7/12 md:block hidden">
                    <input
                        onChange={handleSearch}
                        type="text"
                        name='search'
                        id='search'
                        className="w-full h-9 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none"
                        placeholder="Search..."
                    />
                    <RiSearchLine className="absolute top-0 right-0 h-full w-10 p-2 text-gray-600" />
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
                    {/* <li><NavLink to="/shop" onClick={closeMenu}>SHOP</NavLink></li> */}
                    <li><NavLink to="/men" onClick={closeMenu}>MEN</NavLink></li>
                    <li><NavLink to="/women" onClick={closeMenu}>WOMEN</NavLink></li>
                    <li><NavLink to="/kids" onClick={closeMenu}>KIDS</NavLink></li>
                </ul>
                <div className='flex items-center gap-5'>

                    {user?.email ?
                        <div className="header-menu">
                            <ul>
                                <li>
                                    <div className='flex items-center cursor-pointer'>
                                        <img className='rounded-full w-10 border' src={user?.photoURL} alt="" />
                                        <span className='text-sm'>Hello, {user?.email && user?.email.slice(0, user?.email.indexOf('@')).slice(0, 10)}...</span>
                                        <span><MdArrowDropDown></MdArrowDropDown></span>
                                    </div>

                                    <ul className="dropdown-menu w-40  shadow-md">
                                        <li><Link to="/wishlist">My Wishlist</Link></li>
                                        <li><Link to="/myorder">My Oders</Link></li>
                                        <li><Link to="#">My Reviews</Link></li>
                                        <li><Link><button onClick={logOut} className='flex items-center gap-1' type='button'><IoLogOutOutline></IoLogOutOutline>Logout</button></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        :
                        <Link to='/login' onClick={closeMenu} className="login-link">
                            <button onClick={logOut} className="font-semibold md:py-2 py-1 px-2 flex items-center gap-1 md:px-5 rounded-3xl border border-black ">
                                <IoPersonOutline className='md:text-xl' /> LOGIN
                            </button>
                        </Link>
                    }
                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <Link to="/cart" onClick={closeMenu}>
                        <div className='flex items-center'>
                            <IoCartOutline className='text-2xl' />
                            <span className='relative -mt-5 bg-[#eb2f06] text-white h-4 w-4 rounded-full text-center leading-[16px] '>  {cartData?.length > 0 ? cartData?.length : ''}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


