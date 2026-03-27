import React from 'react'
import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import Homepage from './Components/HomePage/Homepage'
=======

>>>>>>> ae833f2db0b06505445ad02ec7f4a2401192a9e1
import Navbar from './NavBar/Navbar'
import Movies from './Components/Movies/Movies'
import Login from './NavBar/Login/Login'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='movies' element={<Movies />} />
        <Route path='login' element={<Login />} />
<<<<<<< HEAD

=======
>>>>>>> ae833f2db0b06505445ad02ec7f4a2401192a9e1
      </Routes>

    </div>
  )
}

export default App;