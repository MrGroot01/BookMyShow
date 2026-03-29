import React, { useState } from "react";
import "./ComedyShow.css";

const showsData = [
  {
    id: 1,
    title: "Kannada Standup Comedy Show",
    venue: "Harivu Books: Bengaluru",
    category: "Stand up Comedy",
    price: "₹149 onwards",
    image: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=400"
  },
  {
    id: 2,
    title: "Kannada All Stars",
    venue: "The Stage Cafe",
    category: "Stand up Comedy",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1509822929063-6b5cfc9b42f2?w=400"
  },
  {
    id: 3,
    title: "Improv Comedy Jam",
    venue: "Brik Oven",
    category: "Improv Comedy",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400"
  },
  {
    id: 4,
    title: "Moor Jana Crowd Work",
    venue: "The Stage Cafe",
    category: "Stand up Comedy",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400"
  },

  // EXTRA 16 SHOWS 👇
  {
    id: 5,
    title: "Comedy Night Live",
    venue: "Indiranagar Club",
    category: "Stand up Comedy",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=400"
  },
  {
    id: 6,
    title: "Laugh Riot",
    venue: "Koramangala Arena",
    category: "Open Mic",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400"
  },
  {
    id: 7,
    title: "Standup Saturdays",
    venue: "MG Road",
    category: "Stand up Comedy",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=400"
  },
  {
    id: 8,
    title: "Funny Nights",
    venue: "Whitefield Stage",
    category: "Sketch",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400"
  },
  {
    id: 9,
    title: "Improv Madness",
    venue: "HSR Layout",
    category: "Improv Comedy",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400"
  },
  {
    id: 10,
    title: "Open Mic Evening",
    venue: "BTM Stage",
    category: "Open Mic",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400"
  },
  {
    id: 11,
    title: "Roast Battle",
    venue: "Electronic City",
    category: "Stand up Comedy",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400"
  },
  {
    id: 12,
    title: "Comedy Express",
    venue: "Yelahanka",
    category: "Stand up Comedy",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400"
  },
  {
    id: 13,
    title: "LOL Night",
    venue: "Rajajinagar",
    category: "Sketch",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400"
  },
  {
    id: 14,
    title: "Weekend Comedy Blast",
    venue: "Jayanagar",
    category: "Stand up Comedy",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400"
  },
  {
    id: 15,
    title: "Laugh Factory",
    venue: "Banashankari",
    category: "Open Mic",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400"
  },
  {
    id: 16,
    title: "Giggle Fest",
    venue: "Hebbal",
    category: "Stand up Comedy",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400"
  },
  {
    id: 17,
    title: "Comic Nights",
    venue: "Marathahalli",
    category: "Stand up Comedy",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400"
  },
  {
    id: 18,
    title: "Standup Stories",
    venue: "Bellandur",
    category: "Stand up Comedy",
    price: "₹179",
    image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=400"
  },
  {
    id: 19,
    title: "Humor Night",
    venue: "KR Puram",
    category: "Sketch",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400"
  },
  {
    id: 20,
    title: "Ultimate Comedy Show",
    venue: "Malleshwaram",
    category: "Stand up Comedy",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1515165562835-c3b8c8c9d7d2?w=400"
  }
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

const ComedyShow = () => {
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