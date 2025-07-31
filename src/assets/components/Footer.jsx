import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa6";


function Footer() {
  return (
    <>
      <hr className="footer-divider" />
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={24} className="footer-icon" />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={24} className="footer-icon" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={24} className="footer-icon" />
  </a>
  <a href="https://www.linkedin.com/in/ritesh-kumar-956352289/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn size={24} className="footer-icon" />
  </a>
</div>

          <div className="footer-text">
            <p>&copy; All rights reserved by Ritesh</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
