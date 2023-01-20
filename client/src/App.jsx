import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  
  return (
    <BrowserRouter>
      <div className='bg-zinc-900 text-white'>
        <Home/>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
