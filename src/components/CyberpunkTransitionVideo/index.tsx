'use client'
import React, { useEffect, useState, useRef, memo } from 'react';
import styles from './cyberpunkTransitionVideo.module.css';

interface CyberpunkTransitionVideoProps {
  isVisible: boolean;
  onVideoEnd: () => void;
}

const CyberpunkTransitionVideo: React.FC<CyberpunkTransitionVideoProps> = memo(({ 
  isVisible, 
  onVideoEnd 
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasEndedRef = useRef<boolean>(false);

  useEffect(() => {
    if (isVisible) {
      setShowVideo(true);
      setFadeOut(false);
      hasEndedRef.current = false;
    } else {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setShowVideo(false);
      }, 500); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleVideoEnded = React.useCallback(() => {
    if (!hasEndedRef.current && isVisible) {
      console.log("Video ended event fired");
      hasEndedRef.current = true;
      setFadeOut(true);
      setTimeout(() => {
        onVideoEnd();
      }, 500);
    }
  }, [onVideoEnd, isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    const fallbackTimer = setTimeout(() => {
      console.log("Fallback timer triggered");
      if (!hasEndedRef.current && isVisible) {
        handleVideoEnded();
      }
    }, 4000);
    
    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [isVisible, handleVideoEnded]);

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
        preload="auto"
        onEnded={handleVideoEnded}
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'opacity'
        }}
      />
    </div>
  );
});

CyberpunkTransitionVideo.displayName = 'CyberpunkTransitionVideo';

export default CyberpunkTransitionVideo;
