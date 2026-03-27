import React from "react";
import "./HomePage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Homepage = () => {
  const banners = [
    {
      img: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8",
      title: "First Slide",
    },
    {
      img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      title: "Second Slide",
    },
    {
      img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
      title: "Third Slide",
    },
  ];

  return (
    <div className="homepage">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={item.img} alt="banner" />

              {/* Overlay */}
              <div className="overlay"></div>

              {/* Text */}
              <h1 className="slide-text">{item.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Homepage;