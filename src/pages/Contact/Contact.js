import React, { useState } from 'react';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contact">
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Request A call Back</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div>
                  <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                </div>
                <div>
                  <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} />
                </div>
                <div>
                  <input type="text" name="message" className="message-box" placeholder="Message" onChange={handleChange} value={formData.message} />
                </div>
                <div className="d-flex mt-4">
                  <button type="submit">SEND</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681247.30629952!2d28.36345558609206!3d-25.70548110520028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955f65e6e18659%3A0x1b30a37d404e9c1!2sIkamvaYouth%20Mamelodi!5e0!3m2!1sen!2sie!4v1717078122115!5m2!1sen!2sie" 
                  width="600" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IkamvaYouth Mamelodi Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;