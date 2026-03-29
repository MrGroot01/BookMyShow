import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComedyShow.css";

const shows = [
  {
    id: 1,
    title: "Drunk & Unhinged: The Weekend Late-night Show",
    venue: "Just BLR Comedy Club: Bengaluru",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Sun, 29 Mar",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
  },
  {
    id: 2,
    title: "Dhandho ft Munawar Faruqui",
    venue: "Venue To Be Announced",
    category: "Stand up Comedy",
    price: "₹799 onwards",
    date: "Sat, 18 Apr",
    image: "https://in.bmscdn.com/events/moviecard/ET00354321.jpg",
  },
  {
    id: 3,
    title: "Kal Ki Chinta Nahi Karta ft. Ravi Gupta",
    venue: "MLR Convention Centre",
    category: "Stand up Comedy",
    price: "₹799 onwards",
    date: "Sat, 11 Apr onwards",
    image: "https://in.bmscdn.com/events/moviecard/ET00354321.jpg",
  },
  {
    id: 4,
    title: "Inventions by Biswa Kalyan Rath",
    venue: "Viveka Auditorium",
    category: "Stand up Comedy",
    price: "₹999 onwards",
    date: "Fri, 22 May onwards",
    image: "https://in.bmscdn.com/events/moviecard/ET00354321.jpg",
  },
];

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

        <div className="pills">
          <span className="active">Stand up Comedy</span>
          <span>Open Mic Comedy</span>
          <span>Improv Comedy</span>
          <span>Surprise Act</span>
          <span>Roast</span>
          <span>Sketch</span>
        </div>

        {/* GRID */}
        <div className="grid">
          {shows.map((show) => (
            <div
              key={show.id}
              className="card"
              onClick={() => navigate(`/event/${show.id}`)}
            >
              <div className="image-box">
                <img src={show.image} alt="" />
                <div className="date">{show.date}</div>
              </div>

              {/* ✅ UPDATED CLEAN CONTENT */}
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