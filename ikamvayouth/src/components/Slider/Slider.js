// src/components/Slider/Slider.js
import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <section className="slider_section position-relative">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                   <br />
                  </div>
                </div>
              </div>
            </div>
            {/* Add other carousel items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;