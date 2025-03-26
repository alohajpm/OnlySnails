import React from 'react';
import Header from './Header';
import Hero from './Hero';
import SnailFacts from './SnailFacts';
import FunnySnails from './FunnySnails';
import Chat from './Chat';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <SnailFacts />
        <FunnySnails />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

export default App;