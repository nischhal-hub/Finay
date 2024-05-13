import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Explore from './components/Explore'
import Footer from './components/Footer'
function App() {


  return (
    <>
    <Navbar />
    <Sidebar />
    <Explore />
    <Footer />
    </>
  )
}

export default App
