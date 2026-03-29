import React, { useState } from "react";
import "./ComedyShow.css";

const showsData = [
  {
    id: 1,
    title: "Kannada Standup Comedy Show",
    venue: "Harivu Books: Bengaluru",
    category: "Stand up Comedy",
    price: "₹149 onwards",
    image: "https://source.unsplash.com/300x400/?comedy,stage"
  },
  {
    id: 2,
    title: "Kannada All Stars",
    venue: "The Stage Cafe: Bengaluru",
    category: "Stand up Comedy",
    price: "₹199",
    image: "https://source.unsplash.com/300x400/?standup,comedy"
  },
  {
    id: 3,
    title: "Improv Comedy Jam",
    venue: "Brik Oven: Bengaluru",
    category: "Improv Comedy",
    price: "₹499",
    image: "https://source.unsplash.com/300x400/?improv,comedy"
  },
  {
    id: 4,
    title: "Moor Jana Crowd Work",
    venue: "The Stage Cafe",
    category: "Stand up Comedy",
    price: "₹399",
    image: "https://source.unsplash.com/300x400/?crowd,comedy"
  },
];

// 👉 generate more shows (20 total)
const extraShows = Array.from({ length: 16 }, (_, i) => ({
  id: i + 5,
  title: `Comedy Night ${i + 1}`,
  venue: "Bangalore Club",
  category: "Stand up Comedy",
  price: "₹199 onwards",
  image: `https://source.unsplash.com/300x400/?comedy,show&sig=${i}`
}));

const allShows = [...showsData, ...extraShows];

const ComedyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Stand up Comedy",
    "Improv Comedy",
    "Open Mic",
    "Sketch"
  ];

  const filteredShows =
    selectedCategory === "All"
      ? allShows
      : allShows.filter(show => show.category === selectedCategory);

  return (
    <div className="page">

      {/* LEFT FILTER PANEL */}
      <div className="filters">
        <h2>Filters</h2>

        <div className="filter-box">
          <h4>Date</h4>
          <button>Today</button>
          <button>Tomorrow</button>
          <button>This Weekend</button>
        </div>

        <div className="filter-box">
          <h4>Language</h4>
          <p>Kannada</p>
          <p>English</p>
        </div>

        <div className="filter-box">
          <h4>Price</h4>
          <p>₹0 - ₹200</p>
          <p>₹200 - ₹500</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        <h2>Comedy Shows In Bengaluru</h2>

        {/* CATEGORY BUTTONS */}
        <div className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SHOW CARDS */}
        <div className="grid">
          {filteredShows.map(show => (
            <div className="card" key={show.id}>
              <img src={show.image} alt="show" />
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
};

export default ComedyShow;