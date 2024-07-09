import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your CSS file here
import Example from './ScrollingImages';
import ShuffleHero from './hero';
import NavBar from './nav';
import Carousel from './diffrent';
import FeaturesSection from './feature';
import SupportersSection from './support';
import Demo from './demo';
import IntegratedLearningTools from './tools';
import TestimonialSection from './solution';
import ServicesSection from './content';
import Contact from './contactUs';
import Footer from './footer';


const HomePage = () => {
  return (
    <div className="font-sans">
      <ShuffleHero />
      <Carousel />
     
      <SupportersSection />
      <IntegratedLearningTools />
      <TestimonialSection />
      <ServicesSection />
      <Footer/>
   

    </div>
  );
};

const App = () => {
  return (
    <div className="font-sans">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;