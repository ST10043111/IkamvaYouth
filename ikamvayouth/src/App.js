import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Resources from './pages/Resources/Resources';
import {FaBeer} from 'react-icons/fa';
import OfferSection from './components/OfferSection/OfferSection';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';


function App() {

  return (
    <Router>
      <div className="App">
      
        <Header />

        


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;