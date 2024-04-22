import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function carouselQuotes() {
  const quotes = [
    {
      quote: 'Héctor Guerra',
      className: 'bold',
    },
    {
      quote: 'DIE TRYING',
    },
    {
      quote: 'You are not a victim of fate',
    },
    {
      quote: 'CAPITALISMO, AHORRO Y TRABAJO DURO',
    },
  ];
  return (
    <Swiper
      direction={'vertical'}
      speed={3000}
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className='mySwiper'
    >
      {/* <SwiperSlide><h1>HECTOR</h1></SwiperSlide> */}
      {quotes.map(({ quote, className }, index) => (
        <SwiperSlide key={index}>
          <h4 className={className}>{quote}</h4>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
