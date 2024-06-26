import React from 'react';
import './Footer.css';
import facebook_icon from '../../assets/facebook-icon.png';
import instagram_icon from '../../assets/instagram-icon.png';
import twitter_icon from '../../assets/twitter-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Infinity Travel</p>
      <div className="social-section">
        <h2>Nuestras Redes</h2>
        <br></br>
        <ul className="social-links">
          <li>
            <img src={facebook_icon} alt="Facebook Icon" />
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <img src={instagram_icon} alt="Instagram Icon" />
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <img src={twitter_icon} alt="Twitter Icon" />
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
