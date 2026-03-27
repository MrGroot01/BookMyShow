import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">MyApp</Link>
      </div>

      {/* Search */}
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Location */}
      <div className="nav-location">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      {/* Links */}
      <div className="nav-links">
        <Link to="/movies">Movies</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;