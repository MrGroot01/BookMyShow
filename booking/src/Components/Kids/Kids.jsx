import React, { useState, useEffect } from "react";
import "./KidsPage.css";

const events = [
  {
    id: 1,
    title: "Parsec-Jayanagar by Param",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
    place: "Parsec - Jayanagar",
    category: "Education",
    price: "₹250",
    about:
      "ParSEC is a one-of-a-kind science centre located in Jayanagar...",
  },
  {
    id: 2,
    title: "Rambo Circus - Bengaluru",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg",
    place: "St. John's Auditorium",
    category: "Entertainment",
    price: "₹350",
    about: "Enjoy live circus performances with family.",
  },
];

export default function KidsPage() {
  const [selected, setSelected] = useState(null);
  const [slide, setSlide] = useState(0);

  const images = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686033612345_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686033612346_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686033612347_web.jpg",
  ];

  // ✅ AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">

      {/* ================= LIST PAGE ================= */}
      {!selected && (
        <>
          {/* 🔥 AUTO SLIDER */}
          <div className="slider">
            <img src={images[slide]} alt="banner" />
          </div>

          <div className="main">

            {/* 🔥 LEFT FILTERS (FULL STRUCTURE) */}
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
                  <input type="checkbox" />
                  Date Range
                </label>
              </div>

              <div className="filter-card">
                <div className="filter-header">
                  <span>Categories</span>
                  <span className="clear">Clear</span>
                </div>
              </div>

              <div className="filter-card">
                <div className="filter-header">
                  <span>More Filters</span>
                  <span className="clear">Clear</span>
                </div>
              </div>

              <div className="filter-card">
                <div className="filter-header">
                  <span>Price</span>
                  <span className="clear">Clear</span>
                </div>
              </div>

              <button className="browse">Browse by Venues</button>
            </div>

            {/* 🔥 RIGHT SIDE */}
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

          {/* 🔥 LEFT FULL DETAILS */}
          <div className="info">

            <h2>About The Event</h2>
            <p>{selected.about}</p>

            <h2>You Should Know</h2>
            <div className="info-box">
              Parsec Jayanagar is closed on November 23rd and 24th.
            </div>

            <h2>M-Ticket</h2>
            <div className="info-box">
              Contactless Ticketing & Fast-track Entry
            </div>

            <h2>Gallery</h2>
            <div className="gallery">
              <img src={selected.image} />
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