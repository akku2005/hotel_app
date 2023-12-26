import React from 'react'
import './Contact.scss'
const Contact = () => {
        // const embedUrl = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14973.52490140652!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703402894271!5m2!1sen!2sin`;
  return (
    <div id="contact">
      <div id='heading'>
      <p className='button-like'>Contact Us</p>
      <h2><span>Contact Us</span></h2>
      <p>If you are facing some issue or you want to contact our support team you can reach out to us by any of these mediums.</p>
      </div>
      <div class="card-container">
    <div class="card">
    <div className='popup'>
    <p id='icons'>
    <i class="ri-map-pin-line"></i></p>
      <h2>Our Address</h2>
        <p className='paragraph'>131 / B, New Link Rd, Chakala, Andheri East, Mumbai, Maharashtra 400099</p>
        </div>
    </div>
    <div class="card">
    <div className='popup'>
    <p id='icons'><i class="ri-mail-line"></i></p>
      <h2>Email Us</h2>
        <p className='paragraph'>miradorhotel@gmail.com</p>
        </div>
    </div>
    <div class="card">
    <div className='popup'>
    <p id='icons'><i class="ri-phone-line"></i></p>
      <h2>Call Us</h2>
        <p className='paragraph'>+91 1234567891</p>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Contact
