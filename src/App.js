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

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  // Define the animation for the link
  const linkAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 20 },
  });

  return (
    <Router>
      <div className="App">
        <Header />

        {/* Example of animated Link */}
        <animated.div style={linkAnimation} className="my-3 text-center">
          <Link to="/about" className="btn btn-primary">
            Learn More About Us
          </Link>
        </animated.div>


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