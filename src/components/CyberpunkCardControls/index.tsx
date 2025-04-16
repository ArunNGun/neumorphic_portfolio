'use client'
import React from 'react';
import styles from './cyberpunkCardControls.module.css';
import { useCyberpunk } from '../../context/CyberpunkContext';

const CyberpunkCardControls: React.FC = () => {
  const { cyberpunkMode } = useCyberpunk();

  if (!cyberpunkMode) return null;

  return (
    <div className={styles.controlsContainer}>
      <div className={`${styles.controlButton} ${styles.redButton}`}></div>
      <div className={`${styles.controlButton} ${styles.yellowButton}`}></div>
      <div className={`${styles.controlButton} ${styles.greenButton}`}></div>
    </div>
  );
};

export default CyberpunkCardControls;
