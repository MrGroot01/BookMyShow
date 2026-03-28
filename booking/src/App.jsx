import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from './Components/HomePage/Homepage'
import Navbar from './NavBar/Navbar'
import Movies from './Components/Movies/Movies'
import Login from './NavBar/Login/Login'
import Concerts from './Components/Concerts/Concerts'
import ComedyShow from './Components/ComedyShow/ComedyShow'
import Sports from './Components/Sports/Sports'
import Adventure from './Components/Adventure/Adventure'
import Kids from './Components/Kids/Kids'


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='movies' element={<Movies />} />
        <Route path='login' element={<Login />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/login' element={<Login />} />
        <Route path='/concerts' element={<Concerts/>} />
        <Route path='/comedyshow' element={<ComedyShow/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path='/adventure' element={<Adventure/>} />
        <Route path='/kids' element={<Kids/>} />
      </Routes>

    </div>
  )
}

export default App;