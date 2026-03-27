import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <nav className="navbar">
      {/* Logo / Home */}
      <div className="nav-logo">
        <h2>MyApp</h2>
      </div>

      {/* Search Bar */}
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search movies, events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Location Dropdown */}
      <div className="nav-location">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      {/* Login Button */}
      <div className="nav-login">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;