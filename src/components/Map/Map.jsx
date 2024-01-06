import React, { useState } from 'react';
import "./Map.scss"
const Map = ({ latitude, longitude, uniqueProperty }) => {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14973.52490140652!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703402894271!5m2!1sen!2sin`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  return (
    <>
    <div id='location'>
    <div className="left-column">
    <h2>Location</h2>
    <div id='locationframe'>
    <iframe
      title={`Google Map ${uniqueProperty}`}
      src={embedUrl}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  </div>
  <div className="right-column">
  <div id="contact-form">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group" id="text_area">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="form-group" id="btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </div>
  </div>
    </>
  );
};

export default Map;
