import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} OnlySnails.com. All rights reserved (slowly).</p>
    </footer>
  );
}

export default Footer;