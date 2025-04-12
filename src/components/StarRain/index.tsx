'use client'
import React, { useEffect, useState } from 'react';
import styles from './starRain.module.css';

interface StarProps {
  style: React.CSSProperties;
}

const Star: React.FC<StarProps> = ({ style }) => {
  return (
    <div className={styles.star} style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", fillRule: "evenodd", clipRule: "evenodd" }}
        viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            className={styles.fil0}
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

interface StarRainProps {
  isActive: boolean;
  onAnimationEnd: () => void;
}

const StarRain: React.FC<StarRainProps> = ({ isActive, onAnimationEnd }) => {
  const [stars, setStars] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    if (isActive) {
      const newStars = [];
      const starCount = 50;
      
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 20 + 5;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        const animationDelay = Math.random() * 3;
        
        newStars.push({
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
        });
      }
      
      setStars(newStars);
      
      const maxDuration = 8;
      const timer = setTimeout(() => {
        onAnimationEnd();
        setStars([]);
      }, maxDuration * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onAnimationEnd]);

  if (!isActive) return null;

  return (
    <div className={styles.starRainContainer}>
      {stars.map((style, index) => (
        <Star key={index} style={style} />
      ))}
    </div>
  );
};

export default StarRain;
