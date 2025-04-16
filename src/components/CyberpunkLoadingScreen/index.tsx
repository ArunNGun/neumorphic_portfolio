'use client'
import React, { useEffect, useState } from 'react';
import styles from './cyberpunkLoadingScreen.module.css';

interface CyberpunkLoadingScreenProps {
  onLoadingComplete: () => void;
}

const CyberpunkLoadingScreen: React.FC<CyberpunkLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [terminalText, setTerminalText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);
  
  const fullText = 
    "> Initializing neural interface...\n> Loading cybernetic enhancements...\n> Calibrating visual cortex...\n> Establishing network connection...\n> Welcome to the neon grid, user.";

  useEffect(() => {
    let index = 0;
    const terminalInterval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(terminalInterval);
      }
    }, 30);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShowContent(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(terminalInterval);
      clearInterval(cursorInterval);
      clearInterval(progressInterval);
    };
  }, [fullText, onLoadingComplete]);

  return (
    <div className={`${styles.loadingScreen} ${!showContent ? styles.fadeOut : ''}`}>
      <div className={styles.cyberGrid}>
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className={styles.gridCell}></div>
        ))}
      </div>

      <div className={styles.scanlines}></div>

      <div className={styles.cyberContent}>
        <div className={styles.glitchTitle}>
          <span data-text="SYSTEM OVERRIDE">SYSTEM OVERRIDE</span>
        </div>

        <div className={styles.cyberTerminal}>
          <div className={styles.terminalHeader}>
            <div className={`${styles.terminalButton} ${styles.red}`}></div>
            <div className={`${styles.terminalButton} ${styles.yellow}`}></div>
            <div className={`${styles.terminalButton} ${styles.green}`}></div>
            <span className={styles.terminalTitle}>neural_link.exe</span>
          </div>
          <div className={styles.terminalBody}>
            {terminalText}
            <span className={`${styles.terminalCursor} ${cursorVisible ? styles.visible : ''}`}>
              _
            </span>
          </div>
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressLabel}>
            NEURAL SYNC: {loadingProgress}%
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className={`${styles.cyberCorner} ${styles.topLeft}`}></div>
      <div className={`${styles.cyberCorner} ${styles.topRight}`}></div>
      <div className={`${styles.cyberCorner} ${styles.bottomLeft}`}></div>
      <div className={`${styles.cyberCorner} ${styles.bottomRight}`}></div>

      <div className={styles.techDetails}>
        <div className={styles.techDetail}>SYS.ID: 7734-XZ</div>
        <div className={styles.techDetail}>MEM: {`${(navigator as Navigator & {deviceMemory?: number}).deviceMemory || '16'} GB`}</div>
        <div className={styles.techDetail}>PING: 13ms</div>
      </div>
    </div>
  );
};

export default CyberpunkLoadingScreen;
