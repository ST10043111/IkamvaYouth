// src/components/OfferSection/OfferSection.js
import React from 'react';

const OfferSection = () => {
  const offerItems = [
    {
      image: 'our-partners.png',
      title: 'Our Partners',
      description: 'We collaborate with a diverse range of partners to enhance our impact and reach. Together, we strive to create positive change and support our community.'
    },
    {
      image: 'our-impact.png',
      title: 'Our Impact',
      description: 'Our initiatives have reached thousands, making a tangible difference in their lives. Learn more about the measurable outcomes and stories of change.'
    },
    {
      image: 'get-involved.png',
      title: 'Get Involved',
      description: 'Join us in our mission to make a difference. There are numerous ways you can contribute, from volunteering to donating or participating in our events.'
    },
    {
      image: 'in-touch.png',
      title: 'In Touch',
      description: 'Stay connected with us through our newsletter and social media channels. Get the latest updates, stories, and opportunities delivered to your inbox.'
    }
  ];

  return (
    <section className="offer_section hero_next_section-margin layout_padding">
      <div className="container">
        <div className="row">
          {offerItems.map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="content-box">
                <div className="img-box">
                  <img src={`/images/${item.image}`} alt={item.title} />
                </div>
                <div className="detail-box">
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;