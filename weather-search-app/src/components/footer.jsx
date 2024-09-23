// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Contact Us: info@medital.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>&copy; {new Date().getFullYear()} Medital. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f1f1f1',
  textAlign: 'center',
  padding: '10px 0',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

export default Footer;
