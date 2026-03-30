import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./NavBar/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import Movies from "./Components/Movies/Movies";
import Concerts from "./Components/Concerts/Concerts";
import ComedyShow from "./Components/ComedyShow/ComedyShow";
import EventDetails from "./Components/ComedyShow/EventDetails";
import Sports from "./Components/Sports/Sports";
import Adventure from "./Components/Adventure/Adventure";
import Kids from "./Components/Kids/Kids";

import LoginModal from "./NavBar/Login/Login";

/* ✅ Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ✅ Main Layout */
function Layout({ children, onLoginClick }) {
  return (
    <>
      <Navbar onLoginClick={onLoginClick} />
      {children}
    </>
  );
}

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Layout onLoginClick={() => setOpenLogin(true)}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/comedyshow" element={<ComedyShow />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </Layout>

      {openLogin && (
        <LoginModal close={() => setOpenLogin(false)} />
      )}
    </BrowserRouter>
  );
};

export default App;