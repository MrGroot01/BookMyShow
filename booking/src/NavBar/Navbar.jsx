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
      navigate("/comedyshow"); // ✅ FIXED
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

            {/* ✅ FIXED (Link instead of <a>) */}
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

            {/* LOCATION */}
            <div
              className="nav-location"
              onClick={() => setShowLocation(true)}
            >
              <span>{location} ⌄</span>
            </div>

            {/* LOGIN */}
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
            </Link>

            <Link to="/concerts" className="sub-link">
              <FaMusic size={20} />
            </Link>

            <Link to="/comedyshow" className="sub-link">
              <FaLaughBeam size={20} />
            </Link>

            <Link to="/sports" className="sub-link">
              <FaFutbol size={20} />
            </Link>
          </div>

          <div className="sub-right">
            <Link to="/adventure" className="sub-link">
              <FaHiking size={20} />
            </Link>

            <Link to="/kids" className="sub-link">
              <FaChild size={20} />
            </Link>
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