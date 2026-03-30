import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComedyShow.css";
import shows from "../../data/ShowsData"; // ✅ FIXED

export default function ComedyShow() {
  const navigate = useNavigate();

  return (
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

        <button className="browse-btn">Browse by Venues</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="content">
        <h2 className="heading">Comedy Shows In Bengaluru</h2>

        <div className="grid">
          {shows.map((show) => (
            <div
              key={show.id}
              className="card"
              onClick={() => navigate(`/event/${show.id}`)} // ✅ FIXED
            >
              <div className="image-box">
                <img src={show.image} alt="" />
                <div className="date">{show.date}</div>
              </div>

              <div className="card-content">
                <h3>{show.title}</h3>
                <p className="venue">{show.venue}</p>
                <p className="category">{show.category}</p>
                <p className="price">{show.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}