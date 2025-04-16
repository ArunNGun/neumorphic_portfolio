'use client'
import React from 'react';
import { useResources } from '../../context/ResourcesContext';
import styles from './resourcesLoader.module.css';

const ResourcesLoader: React.FC = () => {
  const { resourcesLoaded } = useResources();

  if (resourcesLoaded) {
    return null;
  }

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className={styles.spinner}></div>
        <div className={styles.loadingText}>Loading resources...</div>
      </div>
    </div>
  );
};

export default ResourcesLoader;
