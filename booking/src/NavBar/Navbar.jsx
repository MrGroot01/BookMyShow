

import React, { useState } from "react";
import "./Navbar.css";
import Location from "./Location/Location";

const Navbar = () => {
  const [location, setLocation] = useState("Bengaluru");
  const [showLocation, setShowLocation] = useState(false);

  return (
    <>
      <nav className="navbar">
        
        <div className="nav-left">
          <a href="/" className="logo-text">
            book<span className="logo-highlight">my</span>show
          </a>

          <div className="nav-search">
            <input placeholder="Search for Movies, Events, Plays, Sports and Activities" />
          </div>
        </div>

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