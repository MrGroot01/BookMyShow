import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Kids.css";

const events = [
  {
    id: 1,
    title: "Parsec-Jayanagar by Param",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
    place: "Parsec - Jayanagar",
    category: "Education",
    price: "₹ 225 onwards",
  },
  {
    id: 2,
    title: "Rambo Circus - Bengaluru",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg",
    place: "St. John's Auditorium",
    category: "Entertainment",
    price: "₹ 350 onwards",
  },
  {
    id: 3,
    title: "Jumbo Circus",
    image: "https://in.bmscdn.com/events/moviecard/ET00378901.jpg",
    place: "Jumbo Circus",
    category: "Entertainment",
    price: "₹ 350 onwards",
  },
  {
    id: 4,
    title: "Space, Satellites, Drones",
    image: "https://in.bmscdn.com/events/moviecard/ET00399999.jpg",
    place: "GiftdMinds Learning Center",
    category: "Education",
    price: "₹ 300",
  },
];

export default function KidsPage() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">

      {/* ✅ SLIDER */}
      <div className="slider">
        <img src={images[slide]} alt="banner" />
      </div>

      <div className="main">

        {/* LEFT */}
        <div className="filters">
          <h2>Filters</h2>

          <div className="filter-card">
            <div className="filter-header">
              <span>Date</span>
              <span className="clear">Clear</span>
            </div>

            <div className="btn-group">
              <button>Today</button>
              <button>Tomorrow</button>
              <button>This Weekend</button>
            </div>

            <label className="checkbox">
              <input type="checkbox" /> Date Range
            </label>
          </div>

          <div className="filter-card">Categories</div>
          <div className="filter-card">More Filters</div>
          <div className="filter-card">Price</div>

          <button className="browse">Browse by Venues</button>
        </div>

        {/* RIGHT */}
        <div className="content">
          <h2>Kids In Bengaluru</h2>

          <div className="chips">
            <span>Entertainment</span>
            <span>Hobby Classes</span>
            <span>Summer Camps</span>
            <span>Education</span>
            <span>Competition</span>
          </div>

          <div className="cards">
            {events.map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => navigate(`/event/${item.id}`)}
              >
                <div className="img-box">
                  <img src={item.image} alt="" />
                  <div className="date">Thu, 2 Apr onwards</div>
                </div>

                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}