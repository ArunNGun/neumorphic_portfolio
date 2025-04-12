'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import StarRain from '../components/StarRain';

interface StarRainContextType {
  triggerStarRain: () => void;
}

export const StarRainContext = createContext<StarRainContextType | undefined>(undefined);

export const useStarRain = (): StarRainContextType => {
  const context = useContext(StarRainContext);
  if (context === undefined) {
    throw new Error('useStarRain must be used within a StarRainProvider');
  }
  return context;
};

interface StarRainProviderProps {
  children: ReactNode;
}

export const StarRainProvider: React.FC<StarRainProviderProps> = ({ children }) => {
  const [showStarRain, setShowStarRain] = useState(false);

  const triggerStarRain = () => {
    setShowStarRain(true);
  };

  const handleAnimationEnd = () => {
    setShowStarRain(false);
  };

  return (
    <StarRainContext.Provider value={{ triggerStarRain }}>
      {children}
      <StarRain isActive={showStarRain} onAnimationEnd={handleAnimationEnd} />
    </StarRainContext.Provider>
  );
};
