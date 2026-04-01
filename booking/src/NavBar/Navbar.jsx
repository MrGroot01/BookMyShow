import React, { useState } from "react";
import {
  FaFilm,
  FaMusic,
  FaLaughBeam,
  FaFutbol,
  FaHiking,
  FaChild,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Location from "./Location/Location";

const Navbar = ({ onLoginClick }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Bengaluru");
  const [showLocation, setShowLocation] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    const value = search.toLowerCase();

    if (value.includes("movie")) {
      navigate("/movies");
    } else if (value.includes("comedy") || value.includes("event")) {
      navigate("/comedyshow");
    } else if (value.includes("sport")) {
      navigate("/sports");
    } else {
      alert("No results found");
    }
  };
if (showSearchPage) {
  const trending = [
    "Project Hail Mary",
    "Dhurandhar The Revenge",
    "Youth",
    "Race Gurram",
    "Love Mocktail 3",
    "BTS World Tour",
    "Awarapan 2"
  ];

  const categories = ["Movies", "Music", "Events", "Plays", "Sports", "Activities"];

  const filtered = trending.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>

      {/* TOP BAR */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span onClick={() => setShowSearchPage(false)}>←</span>

        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for Movies, Events, Plays..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* CATEGORY BUTTONS */}
      <div style={{ display: "flex", gap: "10px", marginTop: "15px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              padding: "8px 12px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              background: "#fff"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TRENDING */}
      <h4 style={{ marginTop: "20px" }}>TRENDING SEARCHES</h4>

      {(searchText ? filtered : trending).map((item, i) => (
        <div
          key={i}
          style={{
            padding: "15px",
            background: "#fff",
            marginTop: "10px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <span>{item}</span>
          <span>🎬</span>
        </div>
      ))}

    </div>
  );
}
  return (
    <>
      <nav className="navbar">
        <div className="container">

          <div className="nav-left">
            <Link to="/" className="logo">
              <img
                src="https://static.vecteezy.com/system/resources/previews/050/816/799/non_2x/bookmyshow-transparent-icon-free-png.png"
                alt="logo"
              />
            </Link>

            <div className="nav-search">
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setShowSearchPage(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                    
                  }
                }}
              />
            </div>
          </div>

          <div className="nav-right">
            <div
              className="nav-location"
              onClick={() => setShowLocation(true)}
            >
              <span>{location} ⌄</span>
            </div>

            <button className="login-btn" onClick={onLoginClick}>
              Sign in
            </button>
          </div>
        </div>
      </nav>

      {/* SECOND NAVBAR */}
      <div className="sub-navbar">
        <div className="container">

          <div className="sub-left">

            <Link to="/movies" className="sub-link">
              <FaFilm size={20} />
              <span className="tooltip">Movies</span>
            </Link>

            <Link to="/concerts" className="sub-link">
              <FaMusic size={20} />
              <span className="tooltip">Concerts</span>
            </Link>

            <Link to="/comedyshow" className="sub-link">
              <FaLaughBeam size={20} />
              <span className="tooltip">Comedy</span>
            </Link>

            <Link to="/sports" className="sub-link">
              <FaFutbol size={20} />
              <span className="tooltip">Sports</span>
            </Link>

          </div>

          <div className="sub-right">

            <Link to="/adventure" className="sub-link">
              <FaHiking size={20} />
              <span className="tooltip">Adventure</span>
            </Link>

            <Link to="/kids" className="sub-link">
              <FaChild size={20} />
              <span className="tooltip">Kids</span>
            </Link>

          </div>

        </div>
      </div>

      {showLocation && (
        <Location
          setShowLocation={setShowLocation}
          setLocation={setLocation}
        />
      )}
    </>
  );
};

export default Navbar;