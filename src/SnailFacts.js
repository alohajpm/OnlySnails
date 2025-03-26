import React from 'react';
import './SnailFacts.css';

function SnailFacts() {
  return (
    <section className="snail-facts">
      <h2>Did You Know? Amazing Snail Facts!</h2>
      <article>
        <h3>Snails Have Thousands of Teeth</h3>
        <p>Despite their gentle appearance, snails possess a radula, a tongue-like organ covered in thousands of microscopic teeth. They use this to scrape food particles.</p>
      </article>
      <article>
        <h3>Some Snails Can Live for Decades</h3>
        <p>The lifespan of a snail varies by species, but some can live for many years, even decades, under the right conditions.</p>
      </article>
      {/* Add more snail facts here */}
    </section>
  );
}

export default SnailFacts;