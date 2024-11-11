// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons';
import Newsletter from '../Newsletter/Newsletter';

function Footer() {
  return (
    <>
      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_logo">
                <Link to="/">
                  <img src="/images/logo.jpg" alt="IkamvaYouth Logo" />
                  <span>IkamvaYouth Mamelodi</span>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_links">
                <h5>Contact Us</h5>
                <p>
                  <a href="mailto:support@ikamvayouth.edu">support@ikamvayouth.edu</a> or
                  <br />
                  call us at <a href="tel:+1234567890">(123) 456-7890</a>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_insta">
                <h5>INFORMATION</h5>
                <p>
                  Stay informed and ahead of the curve! Our information hub provides you with the latest updates,
                  essential school news, and valuable resources to enhance your academic experience.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pl-0 pl-lg-5 pl-md-4">
                <h5>MY ACCOUNT</h5>
                <p><Link to="/profile">Manage your profile</Link></p>
                <h4>Connect</h4>
                <SocialIcons />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid footer_section">
        <p>
          &copy; 2024 <a href="https://ikamvayouth.org/category/mamelodi/" target="_blank" rel="noopener noreferrer">IkamvaYouth Mamelodi</a>, all rights reserved
        </p>
      </section>
    </>
  );
}

export default Footer;