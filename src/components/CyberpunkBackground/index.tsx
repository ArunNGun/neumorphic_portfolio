'use client'
import React, { useRef, useEffect } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './cyberpunkBackground.module.css';

const CyberpunkBackground: React.FC = () => {
  const { cyberpunkMode } = useCyberpunk();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (cyberpunkMode) {
        videoRef.current.play().catch(error => {
          console.error("Video playback failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [cyberpunkMode]);

  if (!cyberpunkMode) return null;

  return (
    <div className={styles.backgroundContainer}>
      <video 
        ref={videoRef}
        className={styles.backgroundVideo}
        src="/cyberpunkhero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default CyberpunkBackground;
