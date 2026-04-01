import React, { useState, useEffect } from "react";
import "./Kids.css";

const events = [
  {
    id: 1,
    title: "Parsec-Jayanagar by Param",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
    place: "Parsec - Jayanagar",
    category: "Education",
    price: "₹225 onwards",
    about:
      "ParSEC is a one-of-a-kind science centre located in Jayanagar...",
  },
  {
    id: 2,
    title: "Rambo Circus - Bengaluru",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg",
    place: "St. John's Auditorium",
    category: "Entertainment",
    price: "₹350 onwards",
    about: "Enjoy live circus performances with family.",
  },
  {
    id: 3,
    title: "Jumbo Circus",
    image: "https://in.bmscdn.com/events/moviecard/ET00378901.jpg",
    place: "Jumbo Circus",
    category: "Entertainment",
    price: "₹350 onwards",
    about: "Fun circus activities.",
  },
];

export default function KidsPage() {
  const [selected, setSelected] = useState(null);
  const [slide, setSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    "https://images.unsplash.com/photo-1608889175250-c7b0f2c3e9b3",
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
  ];

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">

      {/* ================= LIST PAGE ================= */}
      {!selected && (
        <>
          {/* 🔥 SLIDER */}
         <div className="slider">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      className={`slide-img ${index === slide ? "active" : ""}`}
      alt="banner"
    />
  ))}
</div>

          <div className="main">

            {/* LEFT FILTER */}
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

                <label>
                  <input type="checkbox" /> Date Range
                </label>
              </div>

              <div className="filter-card">Categories</div>
              <div className="filter-card">More Filters</div>
              <div className="filter-card">Price</div>

              <button className="browse">Browse by Venues</button>
            </div>

            {/* RIGHT CONTENT */}
            <div className="content">

              <h2>Kids In Bengaluru</h2>

              {/* CATEGORY FILTER */}
              <div className="chips">
                {["All","Entertainment","Education"].map((cat) => (
                  <span
                    key={cat}
                    className={activeCategory === cat ? "active-chip" : ""}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* CARDS */}
              <div className="cards">
                {events
                  .filter((e) =>
                    activeCategory === "All"
                      ? true
                      : e.category === activeCategory
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="card"
                      onClick={() => setSelected(item)}
                    >
                      <img src={item.image} />
                      <div className="date">Thu, 2 Apr onwards</div>

                      <h3>{item.title}</h3>
                      <p>{item.place}</p>
                      <p>{item.category}</p>
                      <p>{item.price}</p>
                    </div>
                  ))}
              </div>

            </div>
          </div>
        </>
      )}

      {/* ================= DETAILS PAGE ================= */}
      {selected && (
        <div className="details">

          <h1>{selected.title}</h1>

          <div className="top">

            <img src={selected.image} className="big-img" />

            <div className="book-box">
              <p>Thu 2 Apr 2026 - Sun 12 Apr 2026</p>
              <p>1 Hour</p>
              <p>All age groups</p>
              <p>{selected.place}</p>

              <h2>{selected.price}</h2>
              <button>Book Now</button>
            </div>

          </div>

          <div className="tags">
            <span>Education</span>
            <span>Entertainment</span>
            <span>Kids</span>
          </div>

          <div className="info">
            <h2>About The Event</h2>
            <p>{selected.about}</p>

            <h2>You Should Know</h2>
            <div className="info-box">
              Closed on specific holidays.
            </div>

            <h2>M-Ticket</h2>
            <div className="info-box">
              Fast-track entry available.
            </div>

            <h2>Gallery</h2>
            <div className="gallery">
              <img src={selected.image} />
              <img src={selected.image} />
            </div>
          </div>

          <button className="back" onClick={() => setSelected(null)}>
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}