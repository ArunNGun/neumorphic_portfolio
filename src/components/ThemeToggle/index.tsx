'use client'
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './themeToggle.module.css';
import { animate, createTimeline, utils } from 'animejs';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { cyberpunkMode } = useCyberpunk();
  const faceRef = useRef<HTMLDivElement>(null);
  const switchBgRef = useRef<HTMLDivElement>(null);
  const eyeLeftRef = useRef<SVGPathElement>(null);
  const eyeRightRef = useRef<SVGPathElement>(null);
  const mouthRef = useRef<SVGPathElement>(null);
  const blinkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const eyeOpenL = "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z";
  const eyeOpenR = "M208 31C208 47.5685 194.569 61 178 61C161.431 61 148 47.5685 148 31C148 14.4315 161.431 1 178 1C194.569 1 208 14.4315 208 31Z";
  const eyeClosedL = "M60 0.000190258C60 16.5687 46.5685 30.0002 30 30.0002C13.4315 30.0002 0 16.5687 0 0.000190258C0 0.000190258 13.4315 5.5 30 5.5C46.5685 5.5 60 0.000190258 60 0.000190258Z";
  const eyeClosedR = "M208 0.999969C208 17.5685 194.569 31 178 31C161.431 31 148 17.5685 148 0.999969C148 0.999969 161.431 9.00001 178 9.00001C194.569 9.00001 208 0.999969 208 0.999969Z";
  const mouthOpen = "M77 60H130V73.5C130 88.1355 118.136 100 103.5 100C88.8645 100 77 88.1355 77 73.5V60Z";
  const mouthSmile = "M77 30H130V30.3375C130 30.7034 118.136 31 103.5 31C88.8645 31 77 30.7034 77 30.3375V30Z";

  const startBlinking = () => {
    if (theme === 'light' && eyeLeftRef.current && eyeRightRef.current) {
      const blinkAnimation = createTimeline({
        defaults: {
          ease: 'inOutQuad',
        },
        onComplete: () => {
          if (blinkTimeoutRef.current) {
            clearTimeout(blinkTimeoutRef.current);
          }
          blinkTimeoutRef.current = setTimeout(startBlinking, 3000);
        }
      });
      
      blinkAnimation
        .add(eyeLeftRef.current, {
          d: [
            { to: eyeClosedL }
          ],
          duration: 100
        })
        .add(eyeRightRef.current, {
          d: [
            { to: eyeClosedR }
          ],
          duration: 100,
          offset: 0
        })
        .add(eyeLeftRef.current, {
          d: [
            { to: eyeOpenL }
          ],
          duration: 100
        })
        .add(eyeRightRef.current, {
          d: [
            { to: eyeOpenR }
          ],
          duration: 100,
          offset: '-=100'
        });
    }
  };

  useEffect(() => {
    if (faceRef.current) {
      animate(faceRef.current, {
        translateX: theme === 'dark' ? 0 : 30,
        rotate: 0,
        backgroundColor: theme === 'dark' ? '#6ef0e1' : '#f3ff94',
        duration: 0
      });
    }
    
    if (switchBgRef.current) {
      if (theme === 'dark') {
        switchBgRef.current.classList.add(styles.offShadow);
      } else {
        switchBgRef.current.classList.add(styles.onShadow);
      }
    }

    if (eyeLeftRef.current && eyeRightRef.current) {
      utils.set(eyeLeftRef.current, {
        d: theme === 'dark' ? eyeClosedL : eyeOpenL
      });
      utils.set(eyeRightRef.current, {
        d: theme === 'dark' ? eyeClosedR : eyeOpenR
      });
    }

    if (mouthRef.current) {
      utils.set(mouthRef.current, {
        d: theme === 'dark' ? mouthOpen : mouthSmile
      });
    }

    if (theme === 'light') {
      startBlinking();
    } else if (blinkTimeoutRef.current) {
      clearTimeout(blinkTimeoutRef.current);
    }

    return () => {
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
      }
    };
  }, [theme]);
  
  const handleToggle = () => {
    const isDark = theme === 'dark';
    
    if (switchBgRef.current) {
      if (isDark) {
        switchBgRef.current.classList.remove(styles.onShadow);
        switchBgRef.current.classList.add(styles.offShadow);
      } else {
        switchBgRef.current.classList.remove(styles.offShadow);
        switchBgRef.current.classList.add(styles.onShadow);
      }
    }
    
    if (faceRef.current) {
      animate(faceRef.current, {
        translateX: isDark ? 0 : 30,
        rotate: isDark ? -360 : 360,
        backgroundColor: isDark ? '#6ef0e1' : '#f3ff94',
        ease: 'easeOutExpo',
        duration: 1050
      });
    }
    
    if (eyeLeftRef.current) {
      animate(eyeLeftRef.current, {
        d: [
          { to: isDark ? eyeClosedL : eyeOpenL }
        ],
        ease: 'easeOutExpo',
        duration: 1050
      });
    }
    
    if (eyeRightRef.current) {
      animate(eyeRightRef.current, {
        d: [
          { to: isDark ? eyeClosedR : eyeOpenR }
        ],
        ease: 'easeOutExpo',
        duration: 1050
      });
    }
    
    if (mouthRef.current) {
      animate(mouthRef.current, {
        d: [
          { to: isDark ? mouthOpen : mouthSmile }
        ],
        ease: 'easeOutExpo',
        duration: 1050
      });
    }
    
    toggleTheme();
  };

  // Hide the theme toggle when in cyberpunk mode
  if (cyberpunkMode) return null;

  return (
    <div className={styles.container}>
      <div 
        ref={switchBgRef}
        className={`${styles.switchBackground} ${theme === 'dark' ? styles.offShadow : styles.onShadow}`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div 
          ref={faceRef}
          className={styles.innerSwitch}
          onClick={handleToggle}
        >
          <svg width="285" height="150" viewBox="0 0 208 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.face}>
            <path 
              ref={mouthRef}
              d={theme === 'dark' ? mouthOpen : mouthSmile} 
              fill="#E76060" 
              className="mouth"
            />
            <path 
              ref={eyeLeftRef}
              d={theme === 'dark' ? eyeClosedL : eyeOpenL} 
              fill="#474747" 
              className="eye eye-left"
            />
            <path 
              ref={eyeRightRef}
              d={theme === 'dark' ? eyeClosedR : eyeOpenR} 
              fill="#474747" 
              className="eye eye-right"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
