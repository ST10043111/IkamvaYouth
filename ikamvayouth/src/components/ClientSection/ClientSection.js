// src/components/ClientSection/ClientSection.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ClientSection = () => {
  const clients = [
    { name: 'Karabo Khene', image: 'karabo.jpg' },
    { name: 'Tisetso Mlambo', image: 'Tisetso.jpg' },
    { name: 'Kagiso Mokgatla', image: 'client.png' }
  ];

  return (
    <section className="client_section layout_padding">
      <div className="container layout_padding2-top">
        <div className="heading_container">
          <h2>Staff & Tutors</h2>
        </div>
        <Carousel>
          {clients.map((client, index) => (
            <Carousel.Item key={index}>
              <div className="client_container layout_padding">
                <div className="img-box gold-circle">
                  <img src={`/images/${client.image}`} alt={client.name} />
                </div>
                <div className="detail-box">
                  <h4>{client.name}</h4>
                  <img src="/images/quote.png" alt="quote" />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ClientSection;