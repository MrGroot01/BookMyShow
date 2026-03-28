import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Location from "./Location/Location";

const Navbar = ({ onLoginClick }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Bengaluru");
  const [showLocation, setShowLocation] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LEFT */}
        <div className="nav-left">
          <Link to="/" className="logo-text">
            book<span className="logo-highlight">my</span>show
          </Link>

          <div className="nav-search">
            <input
              type="text"
              placeholder="Search for Movies, Events, Plays..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="nav-right">

          <Link to="/movies" className="movies-link">
            Movies
          </Link>

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
      </nav>

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