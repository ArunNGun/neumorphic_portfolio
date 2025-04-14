'use client'
import React, { useCallback, useRef, useEffect } from 'react';
import { useStarRain } from '../../context/StarRainContext';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './header.module.css';
import downloadStyles from './downloadButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from '../ThemeToggle';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Card from '../Card';
import { animate, utils } from 'animejs';

const Header = () => {
  const { triggerStarRain } = useStarRain();
  const { cyberpunkMode } = useCyberpunk();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const glitchIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleDownloadClick = useCallback(() => {
    triggerStarRain();
  }, [triggerStarRain]);
  
  useEffect(() => {
    // Clear any existing interval
    if (glitchIntervalRef.current) {
      clearInterval(glitchIntervalRef.current);
      glitchIntervalRef.current = null;
    }
    
    if (cyberpunkMode && titleRef.current) {
      // Reset any previous animations
      utils.set(titleRef.current, {
        translateX: 0,
        translateY: 0,
        scale: 1,
        opacity: 1,
        color: '#ff00ff'
      });
      
      // Start glitch effect
      glitchIntervalRef.current = setInterval(() => {
        // Random glitch values
        const glitchX = Math.random() * 10 - 5;
        const glitchY = Math.random() * 6 - 3;
        const glitchScale = 1 + (Math.random() * 0.1 - 0.05);
        const glitchOpacity = 0.8 + Math.random() * 0.2;
        
        // Apply glitch effect
        animate(titleRef.current!, {
          translateX: [
            { value: glitchX, duration: 100, easing: 'steps(1)' },
            { value: -glitchX, duration: 50, easing: 'steps(1)' },
            { value: 0, duration: 50, easing: 'steps(1)' }
          ],
          translateY: [
            { value: glitchY, duration: 100, easing: 'steps(1)' },
            { value: -glitchY, duration: 50, easing: 'steps(1)' },
            { value: 0, duration: 50, easing: 'steps(1)' }
          ],
          scale: [
            { value: glitchScale, duration: 100, easing: 'steps(1)' },
            { value: 1, duration: 100, easing: 'steps(1)' }
          ],
          opacity: [
            { value: glitchOpacity, duration: 100, easing: 'steps(1)' },
            { value: 1, duration: 100, easing: 'steps(1)' }
          ],
          color: [
            { value: '#00ffff', duration: 50, easing: 'steps(1)' },
            { value: '#ff00ff', duration: 50, easing: 'steps(1)' },
            { value: '#ffffff', duration: 50, easing: 'steps(1)' },
            { value: '#ff00ff', duration: 50, easing: 'steps(1)' }
          ],
          complete: function() {
            if (!cyberpunkMode && titleRef.current) {
              utils.set(titleRef.current, {
                translateX: 0,
                translateY: 0,
                scale: 1,
                opacity: 1
              });
            }
          }
        });
      }, 2000); // Glitch every 2 seconds
    } else if (titleRef.current) {
      // Reset to normal state when cyberpunk mode is off
      animate(titleRef.current!, {
        translateX: 0,
        translateY: 0,
        scale: 1,
        opacity: 1,
        color: 'var(--text-color)',
        duration: 300,
        easing: 'easeOutQuad'
      });
    }
    
    // Cleanup function
    return () => {
      if (glitchIntervalRef.current) {
        clearInterval(glitchIntervalRef.current);
      }
    };
  }, [cyberpunkMode]);
  return (
    <div className={styles.header}>
      <Card>

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.titleContainer}>
            <h1 ref={titleRef} className={styles.title}>ARUN KUMAR</h1>
            <div className={styles.headerActions}>
              <a 
                href="/Arun_Kumar.pdf" 
                download 
                className={downloadStyles.downloadLink}
                onClick={handleDownloadClick}
              >
                <FontAwesomeIcon icon={faDownload} className={downloadStyles.downloadIcon} />
                <div className={downloadStyles["star-1"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", fillRule: "evenodd", clipRule: "evenodd" }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className={downloadStyles.fil0}
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className={downloadStyles["star-2"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", fillRule: "evenodd", clipRule: "evenodd" }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className={downloadStyles.fil0}
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className={downloadStyles["star-3"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", fillRule: "evenodd", clipRule: "evenodd" }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className={downloadStyles.fil0}
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className={downloadStyles["star-4"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", fillRule: "evenodd", clipRule: "evenodd" }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className={downloadStyles.fil0}
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className={downloadStyles["star-5"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", fillRule: "evenodd", clipRule: "evenodd" }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className={downloadStyles.fil0}
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className={downloadStyles["star-6"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", fillRule: "evenodd", clipRule: "evenodd" }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        className={downloadStyles.fil0}
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
              <ThemeToggle />
            </div>
          </div>
          <h2 className={styles.subtitle}>Software Engineer</h2>
          <div className={styles.socialIcons}>
            <a 
              href="mailto:chaudharyarun5797@gmail.com" 
              className={styles.socialIcon}
              title="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a 
              href="https://github.com/arunNGun" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://www.linkedin.com/in/akumar97/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      </Card>
    </div>
  );
};
 
export default Header;
