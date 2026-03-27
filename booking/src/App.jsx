import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './NavBar/Navbar'
import Homepage from './Components/HomePage/Homepage'
import Movies from './Components/Movies/Movies'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Homepage />}/>
        <Route path='movies/' element ={<Movies />}/>
      </Routes>
    </div>
  )
}

export default App
