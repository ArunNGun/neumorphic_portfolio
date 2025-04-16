'use client'
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface CyberpunkContextType {
  cyberpunkMode: boolean;
  isLoading: boolean;
  isTransitioning: boolean;
  toggleCyberpunkMode: () => void;
  handleLoadingComplete: () => void;
  handleTransitionComplete: () => void;
}

const CyberpunkContext = createContext<CyberpunkContextType | undefined>(undefined);

export const CyberpunkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cyberpunkMode, setCyberpunkMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/cyberpunkmusic.mp3');
    audioRef.current.preload = 'auto';
    
    const handleEnded = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      }
    };
    
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }


    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  const toggleCyberpunkMode = () => {
    const newMode = !cyberpunkMode;
    
    if (newMode) {
      setCyberpunkMode(true);
      document.documentElement.setAttribute('data-cyberpunk', 'true');
      
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      }
      
      setIsTransitioning(true);
    } else {
      setCyberpunkMode(false);
      document.documentElement.setAttribute('data-cyberpunk', 'false');
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <CyberpunkContext.Provider value={{ 
      cyberpunkMode, 
      isLoading, 
      isTransitioning,
      toggleCyberpunkMode, 
      handleLoadingComplete,
      handleTransitionComplete 
    }}>
      {children}
    </CyberpunkContext.Provider>
  );
};

export const useCyberpunk = (): CyberpunkContextType => {
  const context = useContext(CyberpunkContext);
  if (context === undefined) {
    throw new Error('useCyberpunk must be used within a CyberpunkProvider');
  }
  return context;
};
