import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Explore from './components/Explore'
function App() {


  return (
    <>
    <Navbar />
    <Sidebar />
    <Explore />
    </>
  )
}

export default App
