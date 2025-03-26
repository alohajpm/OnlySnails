import React from 'react';
import './FunnySnails.css';

function FunnySnails() {
  return (
    <section className="funny-snails">
      <h2>Snail Humor: Prepare to Giggle (Slowly)!</h2>
      <div className="joke">
        <p>Why did the snail cross the road?</p>
        <p>... Eventually.</p>
      </div>
      <img src="/images/snail-meme.jpg" alt="A funny snail meme" />
      {/* Add more jokes, memes, or funny illustrations here */}
    </section>
  );
}

export default FunnySnails;