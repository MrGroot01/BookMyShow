import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './NavBar/Navbar';
import Homepage from './Components/HomePage/Homepage';
import Movies from './Components/Movies/Movies';
import Concerts from './Components/Concerts/Concerts';
import ComedyShow from './Components/ComedyShow/ComedyShow';
import Sports from './Components/Sports/Sports';
import Adventure from './Components/Adventure/Adventure';
import Kids from './Components/Kids/Kids';

import LoginModal from './NavBar/Login/Login'; // popup modal

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div>

      <Navbar />


      {/* Navbar */}
      <Navbar onLoginClick={() => setOpenLogin(true)} />

      {/* Routes */}

      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/concerts' element={<Concerts />} />
        <Route path='/comedyshow' element={<ComedyShow />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/adventure' element={<Adventure />} />
        <Route path='/kids' element={<Kids />} />
      </Routes>

      {/* Login Popup */}
      {openLogin && (
        <LoginModal close={() => setOpenLogin(false)} />
      )}
    </div>
  );
};

export default App;