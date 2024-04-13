import React from "react";
import "./About.scss";
import vg from "../images/main2.jpg";
const About = () => {
  return (
    <div className="about">
      <div id="heading">
        <p className="button-like">About</p>
        <h2>
          Find Out More <span>About Us</span>
        </h2>
      </div>
      <div id="two-rows3">
        <img src={vg} alt="retimage" />
        <div id="list-items1">
          <h2>
            We are opening since 2002 and we are providing below facilities in
            our hotel..
          </h2>
          <ul>
            <li>- Semi open & outdoor restaurant</li>
            <li>- Poolside bar</li>
            <li>- Car parking</li>
            <li>- Swimming pool/ Jacuzzi</li>
            <li>- 24 Hour security</li>
            <li>- Outside catering service</li>
            <li>- 100 Seating capacity restaurant</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
