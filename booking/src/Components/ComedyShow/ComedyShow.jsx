import React from "react";
import "./ComedyShow.css";

const shows = [
  {
    id: 1,
    title: "Kannada Standup Comedy Show",
    venue: "Harivu Books: Bengaluru",
    category: "Stand up Comedy",
    price: "₹149 onwards",
    date: "Sun, 29 Mar",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400"
  },
  {
    id: 2,
    title: "Kannada All Stars",
    venue: "The Stage Cafe: Bengaluru",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Sat, 4 Apr",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400"
  },
  {
    id: 3,
    title: "Improv Comedy Jam",
    venue: "Brik Oven: Bengaluru",
    category: "Improv Comedy",
    price: "₹499",
    date: "Sun, 29 Mar onwards",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400"
  },
  {
    id: 4,
    title: "Crowd Work Comedy Show",
    venue: "The Stage Cafe: Bengaluru",
    category: "Stand up Comedy",
    price: "₹399 onwards",
    date: "Sat, 11 Apr onwards",
    image: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=400"
  },
  {
    id: 5,
    title: "Comedy Night Live",
    venue: "Indiranagar Club",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Fri, 5 Apr",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=400"
  },
  {
    id: 6,
    title: "Open Mic Night",
    venue: "Koramangala Arena",
    category: "Open Mic",
    price: "₹99",
    date: "Sat, 6 Apr",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400"
  },
  {
    id: 7,
    title: "Laugh Riot",
    venue: "HSR Layout",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Sun, 7 Apr",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400"
  },
  {
    id: 8,
    title: "Standup Saturdays",
    venue: "BTM Stage",
    category: "Stand up Comedy",
    price: "₹249",
    date: "Sat, 13 Apr",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400"
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

          <label>
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

        <div className="filter-box">Categories</div>
        <div className="filter-box">More Filters</div>
        <div className="filter-box">Price</div>

        <button className="browse-btn">Browse by Venues</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="content">
        <h2>Comedy Shows In Bengaluru</h2>

        <div className="pills">
          <span className="active">Kannada</span>
          <span>Stand up Comedy</span>
          <span>Open Mic Comedy</span>
          <span>Improv Comedy</span>
          <span>Surprise Act</span>
          <span>Roast</span>
          <span>Sketch</span>
        </div>

        <div className="grid">
          {shows.map((show) => (
            <div className="card" key={show.id}>
              
              <div className="image-box">
                <img src={show.image} alt="" />
                <div className="date">{show.date}</div>
              </div>

              <div className="card-content">
                <h3>{show.title}</h3>
                <p>{show.venue}</p>
                <p>{show.category}</p>
                <p className="price">{show.price}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}