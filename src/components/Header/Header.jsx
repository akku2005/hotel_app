// Header.js
import React from 'react';
import './Header.scss'; // Import your styles

const Header = () => {
  const emailAddress = 'example@example.com';
  const phoneNumber = '+1234567890';
  return (
    <header>
      <main id="mail">
      <p><i class="ri-mail-line"></i><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
      <p><i class="ri-phone-line"></i><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
      </main>
      <lists id="links">
      <i class="ri-twitter-line" id='twitter-icon'></i>
      <i class="ri-facebook-circle-fill" id='facebook-icon'></i>
      <i class="ri-instagram-line" id='instagram-icon'></i>
      <i class="ri-linkedin-box-fill" id='linkedin-icon'></i>
      </lists>
    </header>
  );
}

export default Header;
