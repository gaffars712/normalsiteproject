import React from 'react';
import Navbar from './Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Lastservi from './Lastservi'
import Contact from './Contact';
import { BrowserRouter } from 'react-router-dom';

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Lastservi/>}/>
      <Route path='/*' element={<Navigate to='/' />} />
      </Routes>

    </BrowserRouter>
  );
};

export default Main;
