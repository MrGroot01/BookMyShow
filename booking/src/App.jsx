import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './NavBar/Navbar'
import Homepage from './Components/HomePage/Homepage'
import Movies from './Components/Movies/Movies'
import LoginModal from './NavBar/Login/Login' // your modal

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div>
      {/* pass function to navbar */}
      <Navbar onLoginClick={() => setOpenLogin(true)} />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='movies' element={<Movies />} />
      </Routes>

      {/* POPUP */}
      {openLogin && (
        <LoginModal close={() => setOpenLogin(false)} />
      )}
    </div>
  )
}

export default App;