'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './cyberpunkTransitionVideo.module.css';

interface CyberpunkTransitionVideoProps {
  isVisible: boolean;
  onVideoEnd: () => void;
}

const CyberpunkTransitionVideo: React.FC<CyberpunkTransitionVideoProps> = ({ 
  isVisible, 
  onVideoEnd 
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible) {
      setShowVideo(true);
      setFadeOut(false);
    } else {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setShowVideo(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      console.log("Fallback timer triggered after 3 seconds");
      if (isVisible) {
        setFadeOut(true);
        setTimeout(() => {
          onVideoEnd();
        }, 500);
      }
    }, 4000);
    
    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [onVideoEnd, isVisible]);

  if (!showVideo) return null;

  return (
    <div className={`${styles.transitionContainer} ${isVisible ? styles.visible : ''} ${fadeOut ? styles.fadeOut : ''}`}>
      <video 
        ref={videoRef}
        className={styles.transitionVideo}
        src="/toggleloader.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => {
          console.log("onEnded event fired");
          setFadeOut(true);
          setTimeout(() => {
            onVideoEnd();
          }, 500);
        }}
      />
    </div>
  );
};

export default CyberpunkTransitionVideo;
