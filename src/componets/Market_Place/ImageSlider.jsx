import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import {  Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2000, // 2 seconds delay for autoplay
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
