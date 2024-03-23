import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide  style={{ backgroundImage: `url('${banner1}')`, backgroundSize: 'cover', backgroundPosition: 'center ', padding: '150px 0' }}>
                    <div className='flex'>
                        <div className="text-overlay md:basis-5/12  text-center">
                            <p className=" text-lg  mb-3">It has Finally started…</p>
                            <h1 className=" md:text-5xl font-bold mb-4">HUGE SALE</h1>
                            <button className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP MEN</button>
                            <button className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP WOMEN</button>
                        </div>
                        <div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url('${banner2}')`, backgroundSize: 'cover',backgroundPosition: 'center ', padding: '150px 0' }}>
                    <div className="text-overlay text-center">
                        <p className=" text-lg  mb-3">Summer Fashion Trends</p>
                        <h1 className="md:text-5xl font-bold mb-4">BIG SALE UP TO</h1>
                        <button className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP MEN</button>
                        <button className="bg-transparent text-black md:px-6 md:py-2 p-2 ml-2 rounded-md border border-black hover:bg-black hover:text-white">SHOP WOMEN</button>
                    </div>


                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default Banner;