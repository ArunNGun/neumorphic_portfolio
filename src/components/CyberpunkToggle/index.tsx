'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import { useResources } from '../../context/ResourcesContext';
import styles from './cyberpunkToggle.module.css';

const CyberpunkToggle: React.FC = () => {
  const { cyberpunkMode, toggleCyberpunkMode } = useCyberpunk();
  const { resourcesLoaded } = useResources();
  const switchBgRef = useRef<HTMLDivElement>(null);
  const innerSwitchRef = useRef<HTMLDivElement>(null);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    if (cyberpunkMode) {
      const glitchInterval = setInterval(() => {
        const shouldGlitch = Math.random() > 0.7;
        if (shouldGlitch) {
          setGlitching(true);
          setTimeout(() => setGlitching(false), 200);
        }
      }, 3000);
      
      return () => clearInterval(glitchInterval);
    }
  }, [cyberpunkMode]);

  const handleToggle = () => {
    const isActive = !cyberpunkMode;
    
    if (switchBgRef.current) {
      if (isActive) {
        switchBgRef.current.classList.remove(styles.offShadow);
        switchBgRef.current.classList.add(styles.onShadow);
      } else {
        switchBgRef.current.classList.remove(styles.onShadow);
        switchBgRef.current.classList.add(styles.offShadow);
      }
    }
    toggleCyberpunkMode();
  };

  if (!resourcesLoaded) {
    return null; // Don't render the toggle until resources are loaded
  }

  return (
    <div className={`${styles.container} ${cyberpunkMode ? styles.cyberpunkContainer : ''} ${glitching ? styles.glitchEffect : ''}`}>
      <div className={styles.techCorner1}></div>
      <div className={styles.techCorner2}></div>
      
      <span className={styles.label} data-text="CP">CP</span>
      <div 
        ref={switchBgRef}
        className={`${styles.switchBackground} ${cyberpunkMode ? styles.onShadow : styles.offShadow}`}
        aria-label={`Toggle cyberpunk mode ${cyberpunkMode ? 'off' : 'on'}`}
      >
        <div 
          ref={innerSwitchRef}
          className={`${styles.innerSwitch} ${cyberpunkMode ? styles.innerSwitchOn : ''}`}
          onClick={handleToggle}
        >
          <div className={styles.cyberpunkIcon} data-text="⚡">⚡</div>
        </div>
        
        {cyberpunkMode && (
          <div className={styles.scanline}></div>
        )}
      </div>
      
      {cyberpunkMode && (
        <div className={styles.techDetails}>
          <div className={styles.techDetail}>SYS.OK</div>
        </div>
      )}
    </div>
  );
};

export default CyberpunkToggle;
