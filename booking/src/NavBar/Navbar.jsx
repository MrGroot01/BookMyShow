import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onLoginClick }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Bengaluru");

  return (
    <nav className="navbar">

      <div className="nav-left">
        <div className="nav-logo">
          <Link to="/" className="logo-text">
            book<span className="logo-highlight">my</span>show
          </Link>
        </div>

        <div className="nav-search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="nav-right">

        <Link to="/movies" className="movies-link">
          Movies
        </Link>

        <div className="nav-location">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Bengaluru</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
          </select>
        </div>

        {/* LOGIN BUTTON */}
        <div className="nav-links">
          <button className="login-btn" onClick={onLoginClick}>
            Sign in
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;