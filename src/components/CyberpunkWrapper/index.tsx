'use client'
import React from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import CyberpunkLoadingScreen from '../CyberpunkLoadingScreen';
import CyberpunkToggle from '../CyberpunkToggle';
import CyberDust from '../CyberDust';

interface CyberpunkWrapperProps {
  children: React.ReactNode;
}

const CyberpunkWrapper: React.FC<CyberpunkWrapperProps> = ({ children }) => {
  const { isLoading, handleLoadingComplete } = useCyberpunk();

  return (
    <>
      {isLoading && <CyberpunkLoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {children}
      <CyberpunkToggle />
      <CyberDust />
    </>
  );
};

export default CyberpunkWrapper;
