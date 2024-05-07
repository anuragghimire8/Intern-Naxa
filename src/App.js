import React from 'react'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
<BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/></Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
