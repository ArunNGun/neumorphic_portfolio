import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Card from '../Card';

const Header = () => {
  return (
    <div className={styles.header}>
      <Card>

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>ARUN KUMAR</h1>
            <a href="/Arun_Kumar.pdf" download className={styles.downloadLink}>
              <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
            </a>
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
