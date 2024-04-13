import React from "react";
import "./Home.scss";
import backgroundImage from "../images/main_image.jpg"; // Adjust the path accordingly
// import { Link } from 'react-router-dom'
const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const overlayTextStyle = {
    color: "white",
  };

  return (
    <>
      <div className="myContainer" style={containerStyle}>
        <div style={overlayTextStyle}></div>
      </div>
      <main id="tile">
        <h1>
          welcome To
          <span> Mirador Hotel</span>
        </h1>
        <h5>Looking for best hotel in Mumbai? Call us for booking.</h5>

        <div className="d-flex">
          <button>
            <a href="tel:+917420987728" class="btn-get-started scrollto mt-2">
              Call Us Now
            </a>
          </button>
          <button>
            <a
              href="https://wa.me/+917420987728"
              class="btn-get-started scrollto mt-2 ms-2"
            >
              Whatsapp Now
            </a>
          </button>
        </div>
      </main>
      <div>
        <div id="home-featured">
          <h3 className="h3-heading">
            FEATURED <span> AMENITIES ON-SITE</span>
          </h3>
          <div className="row mt-5">
            <ul>
              <li>
                <i className="ri-restaurant-line"></i> Restaurant
              </li>
              <li>
                <i class="ri-check-double-line"></i> Outdoor Pool
              </li>
              <li>
                <i class="ri-slideshow-line"></i> Meeting Space
              </li>
              <li>
                <i class="ri-shirt-fill"></i> Laundry
              </li>
              <li>
                <i class="ri-phone-fill"></i> WhatsApp & Call Booking
              </li>
            </ul>
            <ul>
              <li>
                <i class="ri-leaf-line"></i> spa
              </li>
              <li>
                <i class="ri-24-hours-line"></i> 24 Hour Room Service
              </li>
              <li>
                <i class="ri-store-3-fill"></i> Convenience Store
              </li>
              <li>
                <i class="ri-crosshair-fill"></i> Hair Salon
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <i class="ri-check-double-line"></i> Fitness Center
              </li>
              <li>
                <i class="ri-magic-line"></i> Daily HouseKeeping
              </li>
              <li>
                <i class="ri-check-double-line"></i> Room Service
              </li>
              <li>
                <i class="ri-slideshow-2-fill"></i> Meeting Space
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
