import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ComedyShow.css";
import shows from "../../data/ShowsData";

export default function ComedyShow() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("Stand up Comedy");

  // 🔥 NEW STATE
  const [openSection, setOpenSection] = useState(null);

  // 🔥 TOGGLE FUNCTION
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const filteredShows =
    activeCategory === "All"
      ? shows
      : shows.filter(
          (show) =>
            show.category &&
            show.category.trim() === activeCategory
        );

  return (
    <div className="main-container">

      {/* LEFT FILTER */}
      <div className="filters">
        <h2>Filters</h2>

        {/* DATE */}
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

        {/* LANGUAGE */}
        <div className="filter-box">
          <div
            className="filter-header"
            onClick={() => toggleSection("language")}
          >
            <span>Language</span>
            <span className="clear">Clear</span>
          </div>

          {openSection === "language" && (
            <div className="buttons">
              <button>English</button>
              <button>Hindi</button>
              <button>Hinglish</button>
              <button>Kannada</button>
              <button>Tamil</button>
              <button>Telugu</button>
              <button>Malayalam</button>
              <button>Bengali</button>
            </div>
          )}
        </div>

        {/* CATEGORIES */}
        <div className="filter-box">
          <div
            className="filter-header"
            onClick={() => toggleSection("category")}
          >
            <span>Categories</span>
            <span className="clear">Clear</span>
          </div>

          {openSection === "category" && (
            <div className="buttons">
              <button>Stand up Comedy</button>
              <button>Open Mic Comedy</button>
              <button>Improv Comedy</button>
              <button>Surprise Act</button>
              <button>Roast</button>
              <button>Sketch</button>
            </div>
          )}
        </div>

        {/* MORE FILTERS */}
        <div className="filter-box">
          <div
            className="filter-header"
            onClick={() => toggleSection("more")}
          >
            <span>More Filters</span>
            <span className="clear">Clear</span>
          </div>

          {openSection === "more" && (
            <div className="buttons">
              <button>Outdoor Events</button>
              <button>Fast Filling</button>
              <button>Must Attend</button>
              <button>Online Streaming</button>
              <button>Unmissable Events</button>
            </div>
          )}
        </div>

        {/* PRICE */}
        <div className="filter-box">
          <div
            className="filter-header"
            onClick={() => toggleSection("price")}
          >
            <span>Price</span>
            <span className="clear">Clear</span>
          </div>

          {openSection === "price" && (
            <div className="buttons">
              <button>Free</button>
              <button>0 - 500</button>
              <button>501 - 2000</button>
            </div>
          )}
        </div>

        <button className="browse-btn">Browse by Venues</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="content">
        <h2 className="heading">Comedy Shows In Bengaluru</h2>

        {/* CATEGORY PILLS */}
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

        {/* CARDS */}
        <div className="grid">
          {filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <div
                key={show.id}
                className="card"
                onClick={() => navigate(`/event/${show.id}`)}
              >
                <div className="image-box">

                  {/* PROMOTED */}
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
  );
}