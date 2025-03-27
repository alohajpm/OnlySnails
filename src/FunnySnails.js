import React, { useState } from 'react';
import './FunnySnails.css';

// Try to import funny snail images with fallbacks
let funnySnailImages = [];
for (let i = 1; i <= 6; i++) {
  try {
    funnySnailImages[i-1] = require(`./images/funny-snail${i}.jpg`).default;
  } catch (e) {
    // Colored rectangle placeholders with meme text
    const memeTexts = [
      "Speed Racer",
      "Home Improvement",
      "Monday Mood",
      "Shell Shock",
      "Garden Party",
      "Slime Time"
    ];
    funnySnailImages[i-1] = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%23${Math.floor(Math.random()*16777215).toString(16)}' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24px'%3E${memeTexts[i-1]}%3C/text%3E%3C/svg%3E`;
    console.warn(`Couldn't load funny snail image ${i}, using placeholder`);
  }
}

function FunnySnails({ fullPage = false }) {
