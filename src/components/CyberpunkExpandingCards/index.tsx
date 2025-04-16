'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useCyberpunk } from '../../context/CyberpunkContext';
import styles from './cyberpunkExpandingCards.module.css';

interface Project {
  id: number;
  title: string;
  intro: string;
  imageSrc: string;
  tags: string[];
  projectLink: string;
  source_code: string;
}

interface CyberpunkExpandingCardsProps {
  projects: Project[];
}

const CyberpunkExpandingCards: React.FC<CyberpunkExpandingCardsProps> = ({ projects }) => {
  const { cyberpunkMode } = useCyberpunk();
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const debounce = <T extends (...args: unknown[]) => void>(func: T, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: Parameters<T>) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    if (!cyberpunkMode) return;
    
    if (itemsRef.current.length > 0) {
      itemsRef.current[0]?.setAttribute('data-active', 'true');
      updateGridColumns(0);
    }
    
    resyncArticleWidth();
    
    const debouncedResize = debounce(() => {
      resyncArticleWidth();
      updateGridColumns(activeIndex);
    }, 150);
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [cyberpunkMode, activeIndex]);

  const resyncArticleWidth = () => {
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
  };

  const updateGridColumns = (index: number) => {
    if (!listRef.current) return;
    
    const isMobile = window.innerWidth <= 480;
    
    const template = new Array(projects.length)
      .fill('')
      .map((_, i) => (i === index ? '10fr' : '1fr'))
      .join(' ');
    
    if (isMobile) {
      listRef.current.style.setProperty('grid-template-rows', template);
      listRef.current.style.setProperty('grid-template-columns', '1fr');
    } else {
      listRef.current.style.setProperty('grid-template-columns', template);
      listRef.current.style.removeProperty('grid-template-rows');
    }
  };

  const handleItemInteraction = (index: number) => {
    if (!cyberpunkMode) return;
    
    setActiveIndex(index);
    
    itemsRef.current.forEach((item, i) => {
      if (item) {
        item.setAttribute('data-active', (i === index).toString());
      }
    });
    
    updateGridColumns(index);
  };

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
          <li 
            key={project.id}
            ref={el => {
              itemsRef.current[index] = el;
              return undefined;
            }}
            data-active={index === activeIndex ? 'true' : 'false'}
            onClick={() => handleItemInteraction(index)}
            onPointerMove={() => handleItemInteraction(index)}
            onFocus={() => handleItemInteraction(index)}
            className={styles.cardItem}
          >
            <article>
              <h3>{project.title}</h3>
              <p>{project.intro}</p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                <span>ACCESS</span>
              </a>
              
              <a href={project.source_code} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                <span>SOURCE</span>
              </a>
              
              <img src={project.imageSrc} alt={project.title} className={styles.cardImage} />
              
              {/* <div className={styles.tagContainer}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div> */}
            </article>
          </li>
        ))}
      </ul>
      
      <div className={styles.scanlines}></div>
    </div>
  );
};

export default CyberpunkExpandingCards;
