import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./Location.css";

const Location = ({ setShowLocation, setLocation }) => {
    const [showAllCities, setShowAllCities] = useState(true);
    const navigate = useNavigate(); // ✅ ADD THIS

  // ✅ ADD THIS FUNCTION
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          setLocation(`Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`);
          setShowLocation(false);
          navigate("/movies"); // redirect
        },
        () => alert("Unable to fetch location")
      );
    }
  };
  const cities = [
    {
      name: "Bengaluru",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/2d2d1c41951119.57bd38bb0b959.png",
    },
    {
      name: "Mumbai",
      img: "https://as1.ftcdn.net/jpg/02/81/01/82/1000_F_281018227_nFn3vIYTQ14Yg2Yvz55GNM2sh5tzhGrK.jpg",
    },
    {
      name: "Delhi NCR",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-india-gate-icon-svg-download-png-161357.png",
    },
    {
      name: "Hyderabad",
      img: "https://cdn-icons-png.flaticon.com/512/2160/2160071.png",
    },
    {
      name: "Chennai",
      img: "https://as2.ftcdn.net/jpg/06/59/77/15/1000_F_659771515_wTMYftHlWGdQRxTQJiLdfOdPb54vsyIW.jpg",
    },
    {
      name: "Kolkata",
      img: "https://as1.ftcdn.net/jpg/02/81/01/82/1000_F_281018202_g9sN7xwFfYrds9Rsgp8UwaUNEvcaKOoq.jpg",
    },
    {
      name: "Jaipur",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/e8a28741951119.57bd38bb0a76e.png",
    },
    {
      name: "Pune",
      img: "https://cdn-icons-png.flaticon.com/512/16025/16025176.png",
    },
    {
      name: "Ahemdabad",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-jhulta-minar-icon-svg-download-png-119680.png",
    },
    {
      name: "Chandigarh",
      img: "https://static.thenounproject.com/png/996704-200.png",
    },
    {
      name: "Lucknow",
      img: "https://thumbs.dreamstime.com/b/lucknow-city-bara-imambara-icon-as-eps-file-lucknow-city-bara-imambara-icon-299615227.jpg",
    },
     {
      name: "Rajasthan",
      img: "https://static.thenounproject.com/png/3925325-200.png",
    },
  ];

  return (
    <div 
  className="modal-overlay"
  onClick={() => setShowLocation(false)}
>
      <div 
  className="modal-container"
  onClick={(e) => e.stopPropagation()}
>

        <h2>Select Location</h2>

        <input
          className="city-search"
          placeholder="Search city, area or locality"
        />

        <p 
  className="current-location"
  onClick={handleCurrentLocation}
>
  📍 Use Current Location
</p>

        <h3>Popular Cities</h3>

        <div className="city-grid">
          {cities.map((city) => (
            <div
              key={city.name}
              className="city-card"
              onClick={() => {
                setLocation(city.name);
                setShowLocation(false);
              }}
            >
              <img src={city.img} alt={city.name} />
              <p>{city.name}</p>
            </div>
          ))}
        </div>   {/* city-grid ends here */}
        {/* OTHER CITIES TITLE */}
{showAllCities && <h3 className="other-title">Other Cities</h3>}

{/* OTHER CITIES GRID */}
{showAllCities && (
  <div className="other-cities">
    <div>
      <p>Aalo</p>
      <p>Addanki</p>
      <p>Agar Malwa</p>
      <p>Ahmedgarh</p>
      <p>Akbarpur</p>
      <p>Alakode</p>
      <p>Alibaug</p>
    </div>

    <div>
      <p>Abohar</p>
      <p>Adilabad</p>
      <p>Agartala</p>
      <p>Ahore</p>
      <p>Akividu</p>
      <p>Alangudi</p>
      <p>Aligarh</p>
    </div>

    <div>
      <p>Abu Road</p>
      <p>Adimali</p>
      <p>Agiripalli</p>
      <p>Aizawl</p>
      <p>Akluj</p>
      <p>Alangulam</p>
      <p>Alipurduar</p>
    </div>

    <div>
      <p>Achampet</p>
      <p>Adipur</p>
      <p>Agra</p>
      <p>Ajmer</p>
      <p>Akola</p>
      <p>Alappuzha</p>
      <p>Allagadda</p>
    </div>

    <div>
      <p>Acharapakkam</p>
      <p>Adoni</p>
      <p>Ahilyanagar (Ahmednagar)</p>
      <p>Akaltara</p>
      <p>Akot</p>
      <p>Alathur</p>
      <p>Almora</p>
    </div>

  </div>
)}
        <p 
  className="hide-cities"
  onClick={() => setShowAllCities(!showAllCities)}
>
  {showAllCities ? "Hide all cities" : "Show all cities"}
</p>

      </div>
    </div>
  );
};

export default Location;