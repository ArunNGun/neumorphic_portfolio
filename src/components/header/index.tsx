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
import { animate } from 'animejs';

const Header = () => {
  const { triggerStarRain } = useStarRain();
  const { cyberpunkMode } = useCyberpunk();
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  const handleDownloadClick = useCallback(() => {
    triggerStarRain();
  }, [triggerStarRain]);
  
  useEffect(() => {
    if (!cyberpunkMode && titleRef.current) {
      animate(titleRef.current, {
        translateX: 0,
        translateY: 0,
        scale: 1,
        opacity: 1,
        color: 'var(--text-color)',
        duration: 300,
        easing: 'easeOutQuad'
      });
    }
  }, [cyberpunkMode]);
  return (
    <div className={styles.header}>
      <Card>

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.titleContainer}>
            {cyberpunkMode ? (
              <h1 ref={titleRef} className={`${styles.title} ${styles.glitch}`} data-text="ARUN KUMAR">
                <span className={styles.layers} data-text="ARUN KUMAR">ARUN KUMAR</span>
              </h1>
            ) : (
              <h1 ref={titleRef} className={`${styles.title} title`} data-text="ARUN KUMAR">A<span className={styles.flickerLetter}>R</span>UN KUMAR</h1>
            )}
            {cyberpunkMode && (
              <div className={styles.techDetails}>
                <div className={styles.techDetail}>ID: AK-97</div>
                <div className={styles.techDetail}>SYS: ONLINE</div>
              </div>
            )}
            <div className={styles.headerActions}>
              <a
                href="/api/download-resume"
                download
                className={`${downloadStyles.downloadLink} ${cyberpunkMode ? downloadStyles.cyberpunkDownload : ''}`}
                onClick={handleDownloadClick}
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
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
          <h2 className={styles.subtitle} data-text="Software Engineer">Software Engineer</h2>
          {cyberpunkMode && (
            <div className={styles.scanline}></div>
          )}
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
