import './App.css';
import React, {useState} from "react"
import Nav from './component/Nav';
import Body from './component/Body';
import Cta from './component/Cta';
import Home from './pages/Home/Index';
import About from './pages/About/Index';
import Contact from './pages/Contact/Index';
import Project from './pages/Project/Index';
import './App.css'
import {Routes, Route, Link } from "react-router-dom";
import Coming from './component/Coming';
 
const App = () => {

   {
    return( 
    <div className='bg-blue-100'>
      <Nav />
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/project" element={<Project />}/>
      </Routes>
      

    </div> );

  }
}
export default App;
