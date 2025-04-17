'use client'
import React, { useEffect, useState } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import { useResources } from '../../context/ResourcesContext';
import styles from './cyberpunkMusicPlayer.module.css';

const CyberpunkMusicPlayer: React.FC = () => {
  const { cyberpunkMode, isMusicPlaying, toggleMusic } = useCyberpunk();
  const { resourcesLoaded } = useResources();
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    if (cyberpunkMode) {
      const glitchInterval = setInterval(() => {
        const shouldGlitch = Math.random() > 0.8;
        if (shouldGlitch) {
          setGlitching(true);
          setTimeout(() => setGlitching(false), 150);
        }
      }, 4000);
      
      return () => clearInterval(glitchInterval);
    }
  }, [cyberpunkMode]);

  if (!cyberpunkMode || !resourcesLoaded) {
    return null;
  }

  return (
    <div className={`${styles.container} ${styles.cyberpunkContainer} ${glitching ? styles.glitchEffect : ''}`}>
      <div className={styles.techCorner1}></div>
      <div className={styles.techCorner2}></div>
      
      <div className={styles.controlsWrapper}>
        <span className={styles.label} data-text="MUSIC">MUSIC</span>
        
        <div 
          className={`${styles.musicButton} ${isMusicPlaying ? styles.musicButtonActive : ''}`}
          onClick={toggleMusic}
          aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
          title={isMusicPlaying ? 'Pause music' : 'Play music'}
        >
          <div className={styles.musicIcon}>
            {isMusicPlaying ? (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </div>
          
          <div className={styles.scanline}></div>
        </div>
        
        <span className={styles.buttonLabel}>
          {isMusicPlaying ? 'PAUSE' : 'PLAY'}
        </span>
      </div>
      
      <div className={`${styles.visualizer} ${isMusicPlaying ? styles.playing : styles.paused}`}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      
      <div className={styles.techDetails}>
        <div className={styles.techDetail}>SND.OK</div>
      </div>
    </div>
  );
};

export default CyberpunkMusicPlayer;
