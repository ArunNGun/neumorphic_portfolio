import React from 'react'
import styles from './card.module.css'
const Card = ({ children, invert=false }: { children: React.ReactNode, invert?:boolean }) => {
  return ( <div className={invert ? styles.cardInvert : styles.card}>
    {children}
  </div> );
}
 
export default Card;