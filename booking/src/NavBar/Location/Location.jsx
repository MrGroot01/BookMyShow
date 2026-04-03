import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Location.css";

const Location = ({ setShowLocation, setLocation }) => {

  const [showAllCities, setShowAllCities] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleCityClick = (cityName) => {
    setLocation(cityName);
    setShowLocation(false);
    navigate("/movies");
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
          );
          const data = await res.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Your Location";

          handleCityClick(city);
        } catch {
          alert("Location fetch failed");
        }
      });
    }
  };

  const cities = [ /* SAME */ ];
  const otherCities = [ /* SAME */ ];

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    searchTerm.toLowerCase().includes(city.name.toLowerCase())
  );

  return (
    <div
      className="modal-overlay"
      onClick={() => setShowLocation(false)}
      style={{ background: "rgba(0,0,0,0.4)" }}   /* ✅ ADDED */
    >

      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#fff", color: "#000" }}  /* ✅ ADDED */
      >

        <h2 style={{ color: "#000" }}>Select Location</h2>

        <input
          className="city-search"
          placeholder="Search city, area or locality"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            color: "#000",          /* ✅ ADDED */
            background: "#fff",     /* ✅ ADDED */
            border: "1px solid #ccc"
          }}
        />

        <p
          className="current-location"
          onClick={handleCurrentLocation}
          style={{ color: "#007bff" }}   /* ✅ ADDED */
        >
          📍 Use Current Location
        </p>

        <h3 style={{ color: "#000" }}>Popular Cities</h3>

        <div className="city-grid">
          {filteredCities.map((city) => (
            <div
              key={city.name}
              className="city-card"
              onClick={() => handleCityClick(city.name)}
              style={{ color: "#000" }}   /* ✅ ADDED */
            >
              <img src={city.img} alt={city.name} />
              <p style={{ color: "#000" }}>{city.name}</p>
            </div>
          ))}
        </div>

        {showAllCities && (
          <h3 className="other-title" style={{ color: "#000" }}>
            Other Cities
          </h3>
        )}

        {showAllCities && (
          <div className="other-cities">
            {otherCities.map((group, i) => (
              <div key={i}>
                {group.map((city) => (
                  <p
                    key={city}
                    onClick={() => handleCityClick(city)}
                    style={{ color: "#000" }}   /* ✅ ADDED */
                  >
                    {city}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}

        <p
          className="hide-cities"
          onClick={() => setShowAllCities(!showAllCities)}
          style={{ color: "#000" }}   /* ✅ ADDED */
        >
          {showAllCities ? "Hide all cities" : "Show all cities"}
        </p>

      </div>
    </div>
  );
};

export default Location;