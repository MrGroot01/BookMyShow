import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from './Components/HomePage/Homepage'
import Navbar from './NavBar/Navbar'
import Movies from './Components/Movies/Movies'
import Login from './NavBar/Login/Login'
import HomePage from '../../../../../Downloads/HomePage'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='movies' element={<Movies />} />
        <Route path='login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App;