import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ComedyShow.css";
import shows from "../../data/ShowsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function ComedyShow() {
  
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Stand up Comedy");

  const filteredShows =
    activeCategory === "All"
      ? shows
      : shows.filter(
          (show) =>
            show.category &&
            show.category.trim() === activeCategory
        );

  return (
    <>
      {/* 🔥 NEW TOP SLIDER (ADDED - CORRECT POSITION) */}
      <div style={{ width: "100%", padding: "20px 60px" }}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt=""
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754"
              alt=""
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f"
              alt=""
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 🔥 YOUR ORIGINAL CODE (UNCHANGED) */}
      <div className="main-container">

        {/* 🔥 OLD SLIDER (LEFT AS IT IS - NOT REMOVED) */}
        <div style={{ width: "100%", padding: "20px 0" }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            style={{ width: "90%", margin: "auto" }}
          >
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1515169067868-5387ec356754"
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1526947425960-945c6e72858f"
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* LEFT FILTER */}
        <div className="filters">
          <h2>Filters</h2>

          <div className="filter-box">
            <div className="filter-header">
              <span>Date</span>
              <span className="clear">Clear</span>
            </div>

            <div className="buttons">
              <button>Today</button>
              <button>Tomorrow</button>
              <button>This Weekend</button>
            </div>

            <label>
              <input type="checkbox" /> Date Range
            </label>
          </div>

          <div className="filter-item">
            <span>Language</span>
            <span className="clear">Clear</span>
          </div>

          <div className="filter-item">
            <span>Categories</span>
            <span className="clear">Clear</span>
          </div>

          <div className="filter-item">
            <span>More Filters</span>
            <span className="clear">Clear</span>
          </div>

          <div className="filter-item">
            <span>Price</span>
            <span className="clear">Clear</span>
          </div>

          <button className="browse-btn">Browse by Venues</button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="content">
          <h2 className="heading">Comedy Shows In Bengaluru</h2>

          <div className="pills">
            {[
              "Stand up Comedy",
              "Open Mic Comedy",
              "Improv Comedy",
              "Surprise Act",
              "Roast",
              "Sketch",
            ].map((cat) => (
              <span
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid">
            {filteredShows.length > 0 ? (
              filteredShows.map((show) => (
                <div
                  key={show.id}
                  className="card"
                  onClick={() => navigate(`/event/${show.id}`)}
                >
                  <div className="image-box">

                    {show.id === 1 && (
                      <div className="promoted">PROMOTED</div>
                    )}

                    <img
                      src={show.image}
                      alt={show.title}
                      onError={(e) =>
                        (e.target.src = "https://picsum.photos/400/600")
                      }
                    />

                    <div className="date">{show.date}</div>
                  </div>

                  <div className="card-content">
                    <h3>{show.title || "Comedy Show"}</h3>
                    <p className="venue">{show.venue || "Bengaluru"}</p>
                    <p className="category">{show.category || "Stand up Comedy"}</p>
                    <p className="price">{show.price || "₹199 onwards"}</p>
                  </div>
                </div>
              ))
            ) : (
              <h3>No shows found</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}