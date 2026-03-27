import React from 'react'
import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import Homepage from './Components/HomePage/Homepage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
=======
import Navbar from './NavBar/Navbar'
import Homepage from './Components/HomePage/Homepage'
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
>>>>>>> 5350464072e06e8ebe25a0b0bf55a91647e04bee
      </Routes>
    </div>
  )
}

export default App;