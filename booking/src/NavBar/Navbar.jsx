import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  } else if (value.includes("event")) {
    navigate("/events");
  } else if (value.includes("sport")) {
    navigate("/sports");
  } else {
    alert("No results found");
  }
};

  return (
    <>
      <nav className="navbar">
       <div className="container">
        {/* LEFT */}
        <div className="nav-left">
          <Link to="/" className="logo-text">
            my<span className="logo-highlight"></span>
          </Link>

          <div className="nav-search">
            
            <input
  type="text"
  placeholder="Search for Movies, Events, Plays..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
/>
          </div>
        </div>
        

        {/* RIGHT */}
        <div className="nav-right">

          {/* <Link to="/movies" className="movies-link">
            Movies
          </Link> */}

          {/* LOCATION CLICK */}
          <div
            className="nav-location"
            onClick={() => setShowLocation(true)}
          >
            <span>{location} ⌄</span>
          </div>

          {/* LOGIN BUTTON */}
          <button className="login-btn" onClick={onLoginClick}>
            Sign in
          </button>

        </div>
        </div>
      </nav>

{/* 🔵 SECOND NAVBAR */}
      <div className="sub-navbar">
        <div className="container">

        <div className="sub-left">
          <Link to="/movies" className="sub-link">
            Movies
          </Link>
          <span>Stream</span>
          <span>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activities</span>
        </div>

        <div className="sub-right">
          <span>ListYourShow</span>
          <span>Corporates</span>
          <span>Offers</span>
          <span>Gift Cards</span>
        </div>
</div>
      </div>
      {/* LOCATION POPUP */}
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