'use client'
import React, { useEffect, useState } from 'react'
import Card from '../Card';
import styles from './awards.module.css';

// Combined data with images
const awardsData = [
  {
    id: 1,
    title: "WOW & BRAVO Award",
    organization: "Telus International",
    year: "2023",
    description: "Recognized as the top performer employee of the Quarter for outstanding contributions to project delivery and team collaboration.",
    image: '/images/1.png'
  },
  {
    id: 2,
    title: "FED ReactJs-L3 Certification",
    organization: "Wipro",
    year: "2021",
    description: "Certified in FED ReactJs-L3 among only 7 others out of 384 people.",
    image: '/images/3.png'
  },
  {
    id: 3,
    title: "InnoTech-2017 Runner-up",
    organization: "University Level Project Expo",
    year: "2017",
    description: "Led a 3-person team to develop DeathDoom, a multiplayer 3rd person shooting game that earned 2nd place competing against AI and Big Data projects.",
    image: '/images/5.png'
  }
];

// Additional certificate images for the showcase
const certificateImages = [
  '/images/2.jpg',
  '/images/4.png',
  '/images/6.png',
  '/images/7.png',
  '/images/8.png',
  '/images/9.png',
  '/images/10.png',
  '/images/11.png'
];

const Awards = () => {
  const [activeCertificate, setActiveCertificate] = useState(0);
  const allCertificateImages = [...awardsData.map(award => award.image), ...certificateImages];

  // Auto-scroll certificate showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCertificate((prev) => (prev + 1) % allCertificateImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allCertificateImages.length]);

  return (
    <Card>
      <div style={{ padding: '20px', marginTop: '36px' }}>
        <h2 className={styles.mainTitle}>Awards & Recognition</h2>
        
        <div className={styles.splitLayout}>
          {/* Awards List on Left */}
          <div className={styles.awardsContainer}>
            {awardsData.map((award) => (
              <Card invert key={award.id}>
                <div className={styles.awardCard}>
                  <div className={styles.awardHeader}>
                    <h3 className={styles.awardTitle}>{award.title}</h3>
                    <div className={styles.awardMeta}>
                      <span className={styles.organization}>{award.organization}</span>
                      <span className={styles.year}>{award.year}</span>
                    </div>
                  </div>
                  <p className={styles.description}>{award.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Certificate Showcase on Right */}
          <div className={styles.showcaseContainer}>
            <h3 className={styles.showcaseTitle}>Certificate Showcase</h3>
            <div className={styles.certificateShowcase}>
              {allCertificateImages.map((src, index) => (
                <div 
                  key={index}
                  className={`${styles.certificateItem} ${index === activeCertificate ? styles.activeCertificate : ''}`}
                >
                  <img 
                    src={src} 
                    alt={`Certificate ${index + 1}`} 
                    className={styles.certificateImage}
                  />
                </div>
              ))}
            </div>
            
            {/* Certificate Indicators */}
            <div className={styles.certificateIndicators}>
              {allCertificateImages.map((_, index) => (
                <button 
                  key={index} 
                  className={`${styles.certificateIndicator} ${index === activeCertificate ? styles.activeCertificateIndicator : ''}`}
                  onClick={() => setActiveCertificate(index)}
                  aria-label={`View certificate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Awards;
