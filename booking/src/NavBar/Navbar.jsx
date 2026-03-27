<<<<<<< HEAD
=======


>>>>>>> 77e0be5 (initial changes)
import React, { useState } from "react";
import "./Navbar.css";
import Location from "./Location/Location";

<<<<<<< HEAD
const Navbar = ({ onLoginClick }) => {
  const [search, setSearch] = useState("");
=======
const Navbar = () => {
>>>>>>> 77e0be5 (initial changes)
  const [location, setLocation] = useState("Bengaluru");
  const [showLocation, setShowLocation] = useState(false);

  return (
<<<<<<< HEAD
    <nav className="navbar">

      <div className="nav-left">
        <div className="nav-logo">
          <Link to="/" className="logo-text">
=======
    <>
      <nav className="navbar">
        
        <div className="nav-left">
          <a href="/" className="logo-text">
>>>>>>> 77e0be5 (initial changes)
            book<span className="logo-highlight">my</span>show
          </a>

          <div className="nav-search">
            <input placeholder="Search for Movies, Events, Plays, Sports and Activities" />
          </div>
        </div>

<<<<<<< HEAD
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
=======
        <div className="nav-right">
          
          <a href="#" className="movies-link">Movies</a>

          {/* CLICK LOCATION */}
          <div
            className="nav-location"
            onClick={() => setShowLocation(true)}
          >
            <select value={location}>
              <option>Bengaluru</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Kolkata</option>
            </select>
          </div>

          <button className="login-btn">Sign in</button>
>>>>>>> 77e0be5 (initial changes)
        </div>
      </nav>

      {/* POPUP */}
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