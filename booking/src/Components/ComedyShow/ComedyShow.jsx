import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComedyShow.css";
import shows from "../../data/ShowsData";

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
            <button type="button">Today</button>
            <button type="button">Tomorrow</button>
            <button type="button">This Weekend</button>
          </div>

          <label style={{ display: "block", marginTop: "10px" }}>
            <input type="checkbox" /> Date Range
          </label>
        </div>

        <button className="browse-btn">Browse by Venues</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="content">
        <h2 className="heading">Comedy Shows In Bengaluru</h2>

        <div className="grid">
          {shows && shows.length > 0 ? (
            shows.map((show) => (
              <div
                key={show.id}
                className="card"
                onClick={() => navigate(`/event/${show.id}`)}
              >
                <div className="image-box">
                  <img
                    src={show.image}
                    alt={show.title}
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/300")
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
            <h3>No shows available</h3>
          )}
        </div>
      </div>

    </div>
  );
}