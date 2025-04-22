'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './cyberpunkExpandingCards.module.css';
import CyberpunkCardItem, { Project } from './CyberpunkCardItem';
import { debounce, generateGridTemplate, isMobileViewport } from '../../utils/performance';

interface CyberpunkExpandingCardsProps {
  projects: Project[];
}

/**
 * CyberpunkExpandingCards component displays projects in an interactive grid
 * with expanding card functionality in cyberpunk style
 */
const CyberpunkExpandingCards: React.FC<CyberpunkExpandingCardsProps> = ({ projects }) => {
  const { cyberpunkMode } = useCyberpunk();
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  
  /**
   * Updates the grid layout based on active index and viewport size
   */
  const updateGridLayout = useCallback((index: number) => {
    if (!listRef.current) return;
    
    const mobile = isMobileViewport();
    const template = generateGridTemplate(projects.length, index);
    
    if (mobile) {
      listRef.current.style.setProperty('grid-template-rows', template);
      listRef.current.style.setProperty('grid-template-columns', '1fr');
    } else {
      listRef.current.style.setProperty('grid-template-columns', template);
      listRef.current.style.removeProperty('grid-template-rows');
    }
  }, [projects.length]);
  
  /**
   * Calculates and sets the maximum article width for consistent sizing
   */
  const resyncArticleWidth = useCallback(() => {
    if (!listRef.current) return;
    
    let maxWidth = 0;
    itemsRef.current.forEach(item => {
      if (item && item.offsetWidth > maxWidth) {
        maxWidth = item.offsetWidth;
      }
    });
    
    if (maxWidth > 0) {
      listRef.current.style.setProperty('--article-width', `${maxWidth}`);
    }
  }, []);
  
  /**
   * Handles user interaction with a card (click, hover, focus)
   */
  const handleItemInteraction = useCallback((index: number) => {
    if (!cyberpunkMode) return;
    
    setActiveIndex(index);
    updateGridLayout(index);
  }, [cyberpunkMode, updateGridLayout]);
  
  // Initialize and handle resize events
  useEffect(() => {
    if (!cyberpunkMode) return;
    
    // Set initial active card
    if (itemsRef.current.length > 0) {
      updateGridLayout(0);
    }
    
    resyncArticleWidth();
    
    // Create debounced resize handler
    const debouncedResize = debounce(() => {
      resyncArticleWidth();
      updateGridLayout(activeIndex);
    }, 150);
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [cyberpunkMode, activeIndex, resyncArticleWidth, updateGridLayout]);
  
  if (!cyberpunkMode) return null;
  
  return (
    <div className={styles.container}>
      <h1 className={`${styles.fluid} ${styles.title}`}>
        <span className={styles.glitchText} data-text="NEURAL PROJECTS">NEURAL PROJECTS</span>
      </h1>
      <p className={styles.subtitle}>
        Explore my digital constructs. Hover or tap to access project details.
      </p>
      
      <ul 
        className={styles.cardList} 
        ref={listRef}
        style={{ '--items': projects.length, '--ideal': '300px' } as React.CSSProperties}
      >
        {projects.map((project, index) => (
          <CyberpunkCardItem
            key={project.id}
            ref={el => {
              itemsRef.current[index] = el;
              return undefined;
            }}
            project={project}
            isActive={index === activeIndex}
            index={index}
            onInteraction={handleItemInteraction}
          />
        ))}
      </ul>
      
      <div className={styles.scanlines}></div>
    </div>
  );
};

export default CyberpunkExpandingCards;
