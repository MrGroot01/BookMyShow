import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ComedyShow.css";
import shows from "../../data/ShowsData";

export default function ComedyShow() {
  
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Stand up Comedy");

  // ✅ CAROUSEL STATE
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      {/* ✅ FULL WIDTH TOP CAROUSEL */}
      <div className="top-carousel">
        {shows.slice(0, 5).map((show, i) => (
          <img
            key={show.id}
            src={show.image}
            alt={show.title}
            className={i === index ? "active" : ""}
          />
        ))}
      </div>

      {/* MAIN LAYOUT (UNCHANGED) */}
      <div className="main-container">

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
                    <h3>{show.title}</h3>
                    <p className="venue">{show.venue}</p>
                    <p className="category">{show.category}</p>
                    <p className="price">{show.price}</p>
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