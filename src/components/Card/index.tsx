'use client'
import React from 'react'
import styles from './card.module.css'
import CyberpunkCardControls from '../CyberpunkCardControls';

const Card = ({ children, invert=false }: { children: React.ReactNode, invert?:boolean }) => {
  return (
    <div className={invert ? styles.cardInvert : styles.card}>
      <CyberpunkCardControls />
      {children}
    </div>
  );
}
 
export default Card;
