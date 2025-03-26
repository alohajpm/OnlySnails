import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to the Snail-tastic World of OnlySnails.com!</h1>
      <p>Your ultimate (and slightly silly) source for everything you ever wanted to know about snails... and maybe a little bit more.</p>
      <img src="/images/happy-snail.png" alt="A cartoon snail waving hello" />
    </section>
  );
}

export default Hero;