import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './nav';
import FeaturesSection from './feature';
import Demo from './demo';
import IntegratedLearningTools from './tools';
import TestimonialSection from './solution';
import ServicesSection from './content';
import Contact from './contactUs';
import Footer from './footer';
import ShuffleHero from './hero';
import Carousel from './diffrent';
import SupportersSection from './support';

const HomePage = () => {
  return (
    <div className="font-sans">
      <ShuffleHero />
      <Carousel />
      <SupportersSection />
      <IntegratedLearningTools />
      <TestimonialSection />
      <ServicesSection />
      <Footer />
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
          <Route path="/partners" element={<HomePage />} />
          <Route path="/implementation" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
