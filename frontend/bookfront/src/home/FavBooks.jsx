import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './FavBooks.css'; // Import your CSS file
import { EffectCoverflow, Pagination } from 'swiper/modules';

const FavBooks = () => {
    return (
        <div className='fav-books-container'>
            <div className='fav-books'>
                <h2 className="text-3xl font-bold mb-4 text-center">Most Liked Books</h2>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    initialSlide={0}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slide-container">
                            <img src="src/assets/banner-books/book1.png" alt="Slide 1" />
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container">
                            <img src="src/assets/banner-books/book1.png" alt="Slide 1" />
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container">
                            <img src="src/assets/banner-books/book1.png" alt="Slide 1" />
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container">
                            <img src="src/assets/banner-books/book1.png" alt="Slide 1" />
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container">
                            <img src="src/assets/banner-books/book1.png" alt="Slide 1" />
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container">
                            <img src="src/assets/banner-books/book1.png" alt="Slide 1" />
                        
                        </div>
                    </SwiperSlide>
                    {/* Add other slides here */}
                </Swiper>
            </div>
            <div className='text-box'>
                <h1>hdfb</h1>
                <h6> oawurn</h6>
                <p>ytvuby aetn etnn aetnnae oiaern pewirn peirn</p>
            </div>
        </div>
    );
}

export default FavBooks;
