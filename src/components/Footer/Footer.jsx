import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div class="grid-container">
    <div class="grid-item">
   <h1>Mirador Hotel.</h1> 
   <p>131 / B, New Link Rd, Chakala, Andheri East, Mumbai, Maharashtra 400099</p>
    <p><span>Phone</span> :+91 9354499142</p>
    <p><span>Email:</span>miradorhotel@gmail.com</p>
    </div>
    <div class="grid-item">
        <h2> Useful Links</h2>
        <li>Home</li>
        <li>About us</li>
        <li>Room Type</li>
        <li>Gallary</li>
        <li>Contact</li>
    </div>
    <div class="grid-item">
        <h2>Our Services</h2>
        <li>Home</li>
        <li>About us</li>
        <li>Room Type</li>
        <li>Gallary</li>
        <li>Contact</li>
    </div>
    <div class="grid-item">
        <h2>Our Social Networks</h2>
        <p>Contact our team by social media if you want to teach.</p>
        <ul className='socail-links'>
            <li><i class="ri-twitter-line"></i></li>
            <li><i class="ri-facebook-fill"></i></li>
            <li><i class="ri-instagram-line"></i></li>
            <li><i class="ri-skype-line"></i></li>
            <li><i class="ri-linkedin-fill"></i></li>
        </ul>
    </div>
</div>
  )
}

export default Footer
