'use client'
import React from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './cyberDust.module.css';

const CyberDust: React.FC = () => {
  const { cyberpunkMode } = useCyberpunk();
  
  if (!cyberpunkMode) return null;
  
  const particles = Array.from({ length: 50 }, (_, i) => i);
  
  return (
    <div className={styles.cyberDust}>
      {particles.map((i) => (
        <div 
          key={i} 
          className={styles.particle}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        />
      ))}
    </div>
  );
};

export default CyberDust;
