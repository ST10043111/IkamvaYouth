import React from 'react';

import OfferSection from './OfferSection/OfferSection';

import Slider from './Slider/Slider';

import About from '../pages/About/About';

import ClientSection from './ClientSection/ClientSection';


import { Link } from 'react-router-dom';

function Hero() {
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
              <p>Empowering youth through education and mentorship</p>
              <div className="btn-box">
                <Link to="/about" className="btn-1">Read More</Link><br />
                <Link to="/contact" className="btn-2">Contact us</Link>
                
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