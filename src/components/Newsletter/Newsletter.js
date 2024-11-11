// src/components/Newsletter/Newsletter.js
import React, { useState } from 'react';


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Newsletter subscription for:', email);
  };
  

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-3">
        <h5 className="form_heading">Newsletter</h5>
      </div>
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};


export default Newsletter;