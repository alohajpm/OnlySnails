import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">🐌 OnlySnails.com</div>
      <nav>
        <ul>
          <li><a href="/" aria-current="page">Home</a></li>
          <li><a href="/facts">Snail Facts</a></li>
          <li><a href="/chat">Chat</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;