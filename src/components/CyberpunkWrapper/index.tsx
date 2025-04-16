'use client'
import React from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
// import CyberpunkLoadingScreen from '../CyberpunkLoadingScreen';
import CyberpunkToggle from '../CyberpunkToggle';
import CyberDust from '../CyberDust';
import CyberpunkTransitionVideo from '../CyberpunkTransitionVideo';

interface CyberpunkWrapperProps {
  children: React.ReactNode;
}

const CyberpunkWrapper: React.FC<CyberpunkWrapperProps> = ({ children }) => {
  const { isTransitioning, handleTransitionComplete } = useCyberpunk();

  return (
    <>
      {isTransitioning && (
        <CyberpunkTransitionVideo 
          isVisible={isTransitioning} 
          onVideoEnd={handleTransitionComplete} 
        />
      )}
      {children}
      <CyberpunkToggle />
      <CyberDust />
    </>
  );
};

export default CyberpunkWrapper;
