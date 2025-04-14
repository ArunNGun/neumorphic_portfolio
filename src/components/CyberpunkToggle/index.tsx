'use client'
import React, { useRef } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './cyberpunkToggle.module.css';

const CyberpunkToggle: React.FC = () => {
  const { cyberpunkMode, toggleCyberpunkMode } = useCyberpunk();
  const switchBgRef = useRef<HTMLDivElement>(null);
  const innerSwitchRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className={styles.container}>
      <span className={styles.label}>CP</span>
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
          <div className={styles.cyberpunkIcon}>$</div>
        </div>
      </div>
    </div>
  );
};

export default CyberpunkToggle;
