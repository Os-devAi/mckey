import React, { useEffect, useRef, useState } from 'react';
import giftImg from './assets/merry_christmas.png';
import song from './assets/coldplay_viva_la_vida.mp3';
import './App.css';

function App() {
  const snowContainer = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.opacity = `${Math.random()}`;

      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
      });

      snowContainer.current.appendChild(snowflake);
    };

    const intervalId = setInterval(createSnowflake, 300);

    return () => clearInterval(intervalId);
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="container">
        <div className="christmas-content">
          <div className="text-content">
            <h1>Merry Christmas</h1>
            <p className="subtitle">& Happy New Year!</p>
            <br />
            <p className="subtitle">"May your Christmas sparkle with laughter, shine with unforgettable moments, and overflow with the magic of joy—because you deserve the very best."</p>            
          </div>
          <div className="image-content">
            <img src={giftImg} alt="Christmas Scene" className="main-image" />
          </div>
        </div>
        <div className="text-content"> 
          <p className="subtitle">To: Key R.</p>
          <p className="subtitle">From: Os.</p>
        </div>
        <div className="snow-container" ref={snowContainer}></div>
        <button className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <audio ref={audioRef} src={song} loop />
      </div>
    </>
  );
}

export default App;
