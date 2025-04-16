'use client'
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface CyberpunkContextType {
  cyberpunkMode: boolean;
  isLoading: boolean;
  toggleCyberpunkMode: () => void;
  handleLoadingComplete: () => void;
}

const CyberpunkContext = createContext<CyberpunkContextType | undefined>(undefined);

export const CyberpunkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cyberpunkMode, setCyberpunkMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('cyberpunkMode');
    if (savedMode === 'true') {
      setCyberpunkMode(true);
      document.documentElement.setAttribute('data-cyberpunk', 'true');
    }
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

    if (savedMode === 'true' && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
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

  const toggleCyberpunkMode = () => {
    const newMode = !cyberpunkMode;
    
    if (newMode) {
      setIsLoading(true);
      
      setTimeout(() => {
        setCyberpunkMode(true);
        localStorage.setItem('cyberpunkMode', 'true');
        document.documentElement.setAttribute('data-cyberpunk', 'true');
        
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(error => {
            console.error('Audio playback failed:', error);
          });
        }
      }, 100);
    } else {

      setCyberpunkMode(false);
      localStorage.setItem('cyberpunkMode', 'false');
      document.documentElement.setAttribute('data-cyberpunk', 'false');
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <CyberpunkContext.Provider value={{ cyberpunkMode, isLoading, toggleCyberpunkMode, handleLoadingComplete }}>
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
