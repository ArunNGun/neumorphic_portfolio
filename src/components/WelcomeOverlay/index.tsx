'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import styles from './welcomeOverlay.module.css';

const WelcomeOverlay = () => {
  const { isFirstVisit } = useTheme();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFirstVisit) {
      setVisible(false);
      return;
    }

    if (starsRef.current) {
      const starsContainer = starsRef.current;
      const starCount = 30;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = styles.star;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        const size = Math.random() * 4 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        starsContainer.appendChild(star);
      }
    }

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [isFirstVisit]);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.stars} ref={starsRef}></div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h2>Welcome Stranger!!</h2>
          <p>Hover over elements and click them to discover interactive animations and details about my work.</p>
          <p>Explore my projects and skills to see what I can bring to your team!</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
