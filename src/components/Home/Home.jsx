import React from 'react'
import './Home.scss'
import backgroundImage from '../images/main_image.jpg'; // Adjust the path accordingly
// import { Link } from 'react-router-dom'
const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    
  };
  const overlayTextStyle = {
    color: 'white', 
    
  };

  return (
    <>
    <div className="myContainer" style={containerStyle}>
     <div style={overlayTextStyle}>
     
      </div>
     
    </div>
    <main id='tile'>
     <h1>
        welcome To
        <span> Mirador Hotel</span>
     </h1>
     <h5>Looking for best hotel in Mumbai? Call us for booking.</h5>
     
     <div className="d-flex">
     <button><a href="tel:+918721863767" class="btn-get-started scrollto mt-2">Call Us Now</a></button>
     <button><a href="https://wa.me/+918721863767" class="btn-get-started scrollto mt-2 ms-2">Whatsapp Now</a></button>
      </div>
      </main>
      <div>
      <div id='home-featured'>
      <h3 className='h3-heading'>FEATURED <span> AMENITIES ON-SITE</span></h3>
      <div className='row mt-5'>
        <ul>
          <li><i className="ri-restaurant-line"></i>Restaurant</li>
          <li>Outdoor Pool</li>
          <li>Meeting Space</li>
          <li>Laundry</li>
          <li>WhatsApp & Call Booking</li>
          </ul>
          <ul>
            <li>spa</li>
            <li>24 Hour Room Service</li>
            <li>Convenience Store</li>
            <li>Hair Salon</li>
          </ul>
          <ul>
          <li>  Fitness Center</li>
          <li>Daily HouseKeeping</li>
          <li>Room Service</li>
          <li>Meeting Space</li>
          </ul>
          </div>
      </div>
      </div>
      
    </>
  );
}

export default Home
