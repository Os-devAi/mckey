import React, { useEffect, useRef } from 'react';
import giftImg from './assets/merry_christmas.png';
import './App.css';

function App() {
  const snowContainer = useRef(null);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}%`; // Horizontal position
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Animation duration
      snowflake.style.opacity = `${Math.random()}`; // Opacity

      // Improved removal logic:
      snowflake.addEventListener('animationend', () => {
        snowflake.remove(); 
      });

      snowContainer.current.appendChild(snowflake);
    };

    const intervalId = setInterval(createSnowflake, 300);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <div className="container">
        <div className="christmas-content">
          <div className="text-content">
            <h1>Merry Christmas</h1>
            <p className="subtitle">& Happy New Year!</p>
            <p className="subtitle">May your Christmas be wrapped in love and topped with joy, just like the perfect gift.</p>
            <br />
            <p className="subtitle">To: Key R.</p>
            <p className="subtitle">From: Os.</p>
          </div>
          <div className="image-content">
            <img src={giftImg} alt="Christmas Scene" className="main-image" />
          </div>
        </div>
        <div className="snow-container" ref={snowContainer}></div>
      </div>
    </>
  );
}

export default App;
