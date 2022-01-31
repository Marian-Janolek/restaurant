import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className="app-newsletter">
    <div className="app-newsletter-heading">
      <SubHeading title="newsletter" />
      <h1 className="headtext-cormorant">subscribe to our newsletter</h1>
      <p className="p-opensans">and never missl atest updates!</p>
    </div>
    <div className="app-newsletter-input flex-center">
      <input type="email" placeholder="Enter your email address" />
      <button className="custom-button">subscribe</button>
    </div>
  </div>
);

export default Newsletter;
