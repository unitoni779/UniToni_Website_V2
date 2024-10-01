import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import ShuffleHero from './Components/Hero';

import HorizontalScroll from "./Components/HorizontalScroll/HorizontalScroll"
import Carousel from './Components/Carousel/Carousel';
import SupportersSection from './Components/SupportersSection/Support';
import IntegratedLearningTools from './Components/Tools';
import TestimonialSection from './Components/Solution';
import ServicesSection from './Components/Services';
import Footer from './Components/Footer';
import Demo from './DemoPage';
import Contact from './ContactPage';


const App = () => {
 
  const HomePage = () => {
    return (
      <div className="font-sans">
         <ShuffleHero /> 
        <div className="App">
       
            <HorizontalScroll />
        
        </div>
        <Carousel />  
        <SupportersSection />
        <IntegratedLearningTools />
        <TestimonialSection />
        <ServicesSection />
        <Footer /> 
      </div>
    );
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<Demo />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<HomePage />} />
        <Route path="/implementation" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
