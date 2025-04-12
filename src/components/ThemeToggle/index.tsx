'use client'
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './themeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={styles.switch}>
      <input 
        type="checkbox" 
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeToggle;
