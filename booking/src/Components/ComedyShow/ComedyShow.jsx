import React from "react";
import "./ComedyShow.css";

const shows = [
  {
    id: 1,
    title: "Kannada Standup Comedy Show - NamduK",
    venue: "Harivu Books: Bengaluru",
    category: "Stand up Comedy",
    price: "₹149 onwards",
    date: "Sun, 29 Mar",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg"
  },
  {
    id: 2,
    title: "KANNADA ALL-STARS @ SANJAY NAGAR",
    venue: "The Stage Cafe: Bengaluru",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Sat, 4 Apr",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg"
  },
  {
    id: 3,
    title: "Improv Comedy Jam",
    venue: "Brik Oven: Bengaluru",
    category: "Improv Comedy",
    price: "₹499",
    date: "Sun, 29 Mar onwards",
    image: "https://in.bmscdn.com/events/moviecard/ET00378901.jpg"
  },
  {
    id: 4,
    title: "Moor Jana - Kannada Crowdwork Show",
    venue: "The Stage Cafe: Bengaluru",
    category: "Stand up Comedy",
    price: "₹399 onwards",
    date: "Sat, 11 Apr onwards",
    image: "https://in.bmscdn.com/events/moviecard/ET00399999.jpg"
  }
];

export default function ComedyShow() {
  return (
    <div className="container">

      {/* LEFT FILTER PANEL */}
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

          <label className="checkbox">
            <input type="checkbox" /> Date Range
          </label>
        </div>

        <div className="filter-box">
          <div className="filter-header">
            <span>Language</span>
            <span className="clear">Clear</span>
          </div>

          <div className="tags">
            <span>English</span>
            <span>Hindi</span>
            <span>Hinglish</span>
            <span className="active">Kannada</span>
            <span>Tamil</span>
            <span>Telugu</span>
            <span>Bengali</span>
            <span>Malayalam</span>
          </div>
        </div>

        <div className="filter-box"><span>Categories</span></div>
        <div className="filter-box"><span>More Filters</span></div>
        <div className="filter-box"><span>Price</span></div>

        <button className="browse-btn">Browse by Venues</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="content">
        <h2>Comedy Shows In Bengaluru</h2>

        {/* CATEGORY PILLS */}
        <div className="pills">
          <span className="active">Kannada</span>
          <span>Stand up Comedy</span>
          <span>Open Mic Comedy</span>
          <span>Improv Comedy</span>
          <span>Surprise Act</span>
          <span>Roast</span>
          <span>Sketch</span>
        </div>

        {/* CARDS */}
        <div className="grid">
          {shows.map(show => (
            <div className="card" key={show.id}>
              <div className="image-box">
                <img src={show.image} alt="" />
                <div className="date">{show.date}</div>
              </div>

              <h3>{show.title}</h3>
              <p>{show.venue}</p>
              <p className="category">{show.category}</p>
              <p className="price">{show.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}