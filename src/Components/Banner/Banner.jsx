import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You may need to adjust the path depending on your project structure


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000 // Adjust the duration as needed
        });
    }, []);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center ', padding: '150px 0' }}>
                    <div className='flex'>
                        <div className="text-overlay md:basis-5/12  text-center">
                            <p  data-aos="fade-right"  className=" text-lg  mb-3 font-medium">It has Finally started…</p>
                            <h1  data-aos="fade-right" className=" md:text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(4, 3, 3, 0.5)' }}>HUGE SALE</h1>
                            <p className=" md:text-xl mb-4 text-gray-500" >Keep perfect time with the contemporary, expertly-crafted designs.</p>
                            <Link to={'/men'}>
                            <button data-aos="fade-left" className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP MEN</button>
                            </Link>
                            <Link to={'/women'}>
                            <button data-aos="fade-left" className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP WOMEN</button>
                            </Link>
                        </div>
                        <div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url('${banner2}')`, backgroundSize: 'cover', padding: '150px 0' }}>
                    <div className="text-overlay text-center">
                        <p  className=" text-lg mb-3 font-medium">Summer Fashion Trends</p>
                        <h1 className="md:text-5xl font-bold mb-4">BIG SALE UP TO</h1>
                        <h2 className='text-6xl font-bold mb-3'>80%</h2>
                        <Link to={'/men'}>
                            <button className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP MEN</button>
                        </Link>
                        <Link to={'/women'}>
                            <button className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP WOMEN</button>
                        </Link>
                    </div>


                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default Banner;