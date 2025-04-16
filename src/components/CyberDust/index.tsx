'use client'
import React, { memo, useMemo } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './cyberDust.module.css';

const CyberDust: React.FC = () => {
  const { cyberpunkMode } = useCyberpunk();
  
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 15 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      opacity: Math.random() * 0.4 + 0.1,
      transform: 'translateZ(0)'
    }));
  }, []);
  
  if (!cyberpunkMode) return null;
  
  return (
    <div className={styles.cyberDust}>
      {particles.map((particle) => (
        <div 
          key={particle.id} 
          className={styles.particle}
          style={{
            top: particle.top,
            left: particle.left,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay,
            width: particle.width,
            height: particle.height,
            opacity: particle.opacity,
            transform: particle.transform
          }}
        />
      ))}
    </div>
  );
};

export default memo(CyberDust);
