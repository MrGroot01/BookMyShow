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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPy0QB6iKP7gCAbb95xPdX7sUp1QBoetv-Pw&s?w=1920&q=80",
      title: "SPORTS EVENTS",
      desc: "Catch the action live",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCH89RdspGSW52lVmFjtzXidqWc9X3mQ27A&s?w=1920&q=80",
      title: "LIVE CONCERTS",
      desc: "Feel the music",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GjcIgUTfENY8Uqc2B6IQPRJ0Ut6ixqNTyg&s?w=1920&q=10",
      title: "MOVIE PREMIERES",
      desc: "Book your tickets now",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4y84hvL__laAQl6ItYrR0wEGp2QhgZN1H7w&s?w=1920&q=80",
      title: "Plays ",
      desc: "Book your tickets now",
    },
    {
      img: "https://modusdirect.com/wp-content/uploads/2024/12/offers.jpg?w=1920&q=80",
      title: "Offers",
      desc: "Book your tickets now",
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
            <div className="hero-slide">
              <img src={item.img} alt="banner" />

              {/* Overlay */}
              <div className="overlay"></div>

              {/* CENTER CONTENT */}
              <div className="hero-content-center">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Homepage;