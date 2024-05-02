import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function CarouselProject({ projectImages }) {
  return (
    <Swiper
      // direction={'vertical'}
      speed={2000}
      spaceBetween={25}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, Navigation, Pagination]}
      className='myProjectSwiper'
    >
      {/* <SwiperSlide><h1>HECTOR</h1></SwiperSlide> */}
      {projectImages.map(({ image }, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
