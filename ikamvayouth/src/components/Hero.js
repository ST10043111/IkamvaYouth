import React from 'react';

import OfferSection from './OfferSection/OfferSection';

import Slider from './Slider/Slider';

import About from '../pages/About/About';

import ClientSection from './ClientSection/ClientSection';



import './App.css';

import { Link } from 'react-router-dom';

function Hero() {
  // Define the animation for the link
  const linkAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 20 },
  });

  return (
    <section className="hero_section position-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <h1>
                Welcome To<br />
                <span>IkamvaYouth Mamelodi</span>
              </h1>
               
             
              <p>Empowering youth through education and mentorship</p><br/>
              <img src="images/IKAM.png" alt="IKAMVAYOUTH"/>
             
              <div className="btn-box">
                
                <Link to="/contact" className="btn-2">Contact us</Link>
                 {/* Example of animated Link */}
        <animated.div style={linkAnimation} className="my-3 text-center">
                <Link to="/about" className="btn-1">Read More </Link>
                </animated.div><br />
                <Slider />
      <OfferSection />
      <About/>
      <ClientSection />

          

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;