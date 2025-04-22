'use client'
import React, { forwardRef } from 'react';
import styles from './cyberpunkExpandingCards.module.css';

// Types
export interface Project {
  id: number;
  title: string;
  intro: string;
  imageSrc: string;
  tags: string[];
  projectLink: string;
  source_code: string;
}

export interface CyberpunkCardItemProps {
  project: Project;
  isActive: boolean;
  index: number;
  onInteraction: (index: number) => void;
}

/**
 * Individual card item component for the CyberpunkExpandingCards
 * Handles rendering of a single project card with its content and interactions
 */
const CyberpunkCardItem = forwardRef<HTMLLIElement, CyberpunkCardItemProps>(
  ({ project, isActive, index, onInteraction }, ref) => {
    return (
      <li 
        ref={ref}
        data-active={isActive ? 'true' : 'false'}
        onClick={() => onInteraction(index)}
        onPointerMove={() => onInteraction(index)}
        onFocus={() => onInteraction(index)}
        className={styles.cardItem}
      >
        <article>
          <h3>{project.title}</h3>
          <p>{project.intro}</p>
          
          <a 
            href={project.projectLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.cardLink}
            onClick={(e) => e.stopPropagation()} // Prevent triggering card activation
          >
            <span>ACCESS</span>
          </a>
          
          <a 
            href={project.source_code} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.sourceLink}
            onClick={(e) => e.stopPropagation()} // Prevent triggering card activation
          >
            <span>SOURCE</span>
          </a>
          
          <img 
            src={project.imageSrc} 
            alt={project.title} 
            className={styles.cardImage} 
            loading="lazy" // Add lazy loading for better performance
          />
          
          {project.tags && project.tags.length > 0 && (
            <div className={styles.tagContainer}>
              {project.tags.map((tag: string, i: number) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </article>
      </li>
    );
  }
);

// Add display name for better debugging
CyberpunkCardItem.displayName = 'CyberpunkCardItem';

export default CyberpunkCardItem;