import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./NavBar/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import Movies from "./Components/Movies/Movies";
import Concerts from "./Components/Concerts/Concerts";
import ComedyShow from "./Components/ComedyShow/ComedyShow";
import EventDetails from "./Components/ComedyShow/EventDetails";
import Sports from "./Components/Sports/Sports";
import Adventure from "./Components/Adventure/Adventure";
import Kids from "./Components/Kids/Kids";

// ✅ Only ONE import for login modal
import LoginModal from "./NavBar/Login/Login";
// import AdventureDetails from "./Components/Adventure/AdventureDetails";
// import Booking from "./Components/Adventure/Booking";
// import BookingHistory from "./Components/Adventure/BookingHistory";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <ScrollToTop />

      <Navbar onLoginClick={() => setOpenLogin(true)} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/comedyshow" element={<ComedyShow />} />
        <Route path="/event/:id" element={<EventDetails />} /> {/* ✅ important */}
        <Route path="/sports" element={<Sports />} />
        <Route path="/adventure" element={<Adventure />} />
        {/* <Route path="/details/:id" element={<AdventureDetails />} /> */}
        {/* <Route path="/booking/:id" element={<Booking />} /> */}
        {/* <Route path="/bookings" element={<BookingHistory />} /> */}
        <Route path="/kids" element={<Kids />} />
      </Routes>

      {/* ✅ Login Popup */}
      {openLogin && <LoginModal close={() => setOpenLogin(false)} />}
    </>
  );
};

export default App;