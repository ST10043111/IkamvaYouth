// src/pages/Home.js
import React from 'react';
import Hero from '../../components/Hero';

function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="about_section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>IkamvaYouth Mamelodi is dedicated to empowering youth through education and mentorship. We believe in the potential of every young person and strive to provide the resources and support needed for their success.</p>
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;