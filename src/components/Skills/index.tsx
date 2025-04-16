'use client'
import React, { useState, useEffect } from 'react'
import Card from '../Card';
import styles from './skills.module.css';
import { motion } from 'framer-motion';
import { useCyberpunk } from '../../context/CyberpunkContext';

const skillsData = [
  { name: 'React', level: 'high', value: 10, category: 'frontend' },
  { name: 'JavaScript', level: 'high', value: 10, category: 'frontend' },
  { name: 'TypeScript', level: 'high', value: 9, category: 'frontend' },
  { name: 'Open AI APIs', level: 'high', value: 9, category: 'ai' },
  { name: 'React Native', level: 'high', value: 9, category: 'frontend' },
  { name: 'Prompt Engineering', level: 'high', value: 9, category: 'ai' },
  { name: 'GPT-3', level: 'high', value: 9, category: 'ai' },
  { name: 'GPT-4', level: 'high', value: 10, category: 'ai' },
  { name: 'CSS', level: 'high', value: 9, category: 'frontend' },
  { name: 'NextJs', level: 'high', value: 10, category: 'frontend' },
  { name: 'Zustand', level: 'high', value: 9, category: 'frontend' },
  { name: 'Redux', level: 'high', value: 9, category: 'frontend' },
  { name: 'Frontend', level: 'high', value: 10, category: 'frontend' },
  { name: 'Micro-frontend', level: 'high', value: 9, category: 'frontend' },
  { name: 'Storybook', level: 'high', value: 8, category: 'frontend' },
  { name: 'Node', level: 'high', value: 9, category: 'backend' },
  { name: 'Express', level: 'high', value: 9, category: 'backend' },
  { name: 'MongoDB', level: 'high', value: 9, category: 'backend' },
  { name: 'PostgreSQL', level: 'mid', value: 6, category: 'backend' },
  { name: 'gRPC', level: 'mid', value: 6, category: 'backend' },
  { name: 'Redis', level: 'high', value: 8, category: 'backend' },
  { name: 'MySQL', level: 'high', value: 8, category: 'backend' },
  { name: 'NoSQL', level: 'high', value: 9, category: 'backend' },
  { name: 'GraphQL', level: 'high', value: 8, category: 'backend' },
  { name: 'Backend', level: 'high', value: 9, category: 'backend' },
  { name: 'Full-Stack', level: 'high', value: 10, category: 'backend' },
  { name: 'MERN', level: 'high', value: 10, category: 'backend' },
  { name: 'Microservices', level: 'high', value: 9, category: 'backend' },
  { name: 'Jest', level: 'high', value: 8, category: 'testing' },
  { name: 'React Testing Library', level: 'high', value: 8, category: 'testing' },
  { name: 'Enzyme', level: 'high', value: 8, category: 'testing' },
  { name: 'Unit Testing', level: 'high', value: 9, category: 'testing' },
  { name: 'CI/CD', level: 'mid', value: 6, category: 'devops' },
  { name: 'Github actions', level: 'mid', value: 6, category: 'devops' },
  { name: 'webpack5', level: 'mid', value: 6, category: 'devops' },
  { name: 'GCP', level: 'mid', value: 7, category: 'devops' },
  { name: 'Openshift 4', level: 'mid', value: 6, category: 'devops' },
  { name: 'Unleash', level: 'high', value: 8, category: 'devops' },
  { name: 'Adobe analytics', level: 'mid', value: 6, category: 'analytics' },
  { name: 'C', level: 'high', value: 8, category: 'languages' },
  { name: 'C++', level: 'low', value: 4, category: 'languages' },
  { name: 'Java', level: 'low', value: 4, category: 'languages' },
  { name: 'Python', level: 'mid', value: 7, category: 'languages' },
  { name: 'OOP', level: 'mid', value: 7, category: 'concepts' },
  { name: 'Unreal Engine 4', level: 'mid', value: 6, category: 'gamedev' },
  { name: 'Game Development', level: 'mid', value: 6, category: 'gamedev' },
  { name: 'English', level: 'high', value: 10, category: 'languages' },
  { name: 'Hindi', level: 'high', value: 10, category: 'languages' }
]

const skillCategories = [
  { id: 'frontend', name: 'FRONTEND', color: '#00ffff', icon: '⚡' },
  { id: 'backend', name: 'BACKEND', color: '#ff00ff', icon: '🔌' },
  { id: 'ai', name: 'AI & ML', color: '#fcee0a', icon: '🧠' },
  { id: 'testing', name: 'TESTING', color: '#00ff00', icon: '🧪' },
  { id: 'devops', name: 'DEVOPS', color: '#ff5500', icon: '🔧' },
  { id: 'languages', name: 'LANGUAGES', color: '#ff0066', icon: '📝' },
  { id: 'gamedev', name: 'GAME DEV', color: '#00ddff', icon: '🎮' },
  { id: 'analytics', name: 'ANALYTICS', color: '#bb00ff', icon: '📊' },
  { id: 'concepts', name: 'CONCEPTS', color: '#ffaa00', icon: '💡' }
]
const Skills = () => {
  const { cyberpunkMode } = useCyberpunk();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [, setHoveredSkill] = useState<string | null>(null);
  const [scanEffect, setScanEffect] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };
  
  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        duration: 0.3
      }
    }
  };

  const cyberSkillVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    }
  };
  
  const getSkillsByCategory = (categoryId: string) => {
    return skillsData.filter(skill => skill.category === categoryId);
  };
  
  useEffect(() => {
    if (cyberpunkMode) {
      setScanEffect(true);
      const timer = setTimeout(() => {
        setScanEffect(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [activeCategory, cyberpunkMode]);
  
  const getSkillColor = (level: string): string => {
    switch(level) {
      case 'high': return '#4caf50';
      case 'mid': return '#ffc107';
      case 'low': return '#f44336';
      default: return '#cccccc';
    }
  };

  const frontendSkills = skillsData.filter(skill => 
    skill.category === 'frontend'
  );
  
  const backendSkills = skillsData.filter(skill => 
    skill.category === 'backend'
  );
  
  const otherSkills = skillsData.filter(skill => 
    skill.category !== 'frontend' && skill.category !== 'backend'
  );

  return (
    <Card>
      <div style={{ padding: '20px', marginTop: '36px' }}>
        <div className={styles.container}>
          {cyberpunkMode ? (
            <div className={styles.cyberpunkContainer}>
              <div className={styles.cyberpunkHeader}>
                <h2 className={styles.cyberpunkTitle}>
                  <span className={styles.glitchText} data-text="NEURAL SKILLZ">NEURAL SKILLZ</span>
                </h2>
                <div className={styles.cyberpunkSubtitle}>SKILL MATRIX v2.0</div>
              </div>
              
              <div className={styles.categoryNav}>
                {skillCategories.map(category => (
                  <button 
                    key={category.id}
                    className={`${styles.categoryButton} ${activeCategory === category.id ? styles.activeCategory : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                    style={{ 
                      '--category-color': category.color,
                      borderColor: activeCategory === category.id ? category.color : 'rgba(255,255,255,0.2)'
                    } as React.CSSProperties}
                  >
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className={`${styles.cyberpunkSkillsArea} ${scanEffect ? styles.scanning : ''}`}>
                <div className={styles.scanline}></div>
                
                <motion.div 
                  className={styles.cyberpunkSkillsGrid}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={activeCategory}
                >
                  {getSkillsByCategory(activeCategory).map((skill, index) => (
                    <motion.div 
                      key={`cyber-${skill.name}-${index}`}
                      className={styles.cyberpunkSkillItem}
                      variants={cyberSkillVariants}
                      whileHover="hover"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={styles.skillNameValue}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillValue}>{skill.value}</span>
                      </div>
                      
                      <div className={styles.skillBarContainer}>
                        <div 
                          className={styles.skillBar} 
                          style={{ 
                            width: `${skill.value * 10}%`,
                            backgroundColor: getSkillColor(skill.level)
                          }}
                        ></div>
                      </div>
                      
                      <div className={styles.skillAttributes}>
                        <span className={styles.skillAttribute}>LVL {skill.value}</span>
                        <span className={styles.skillAttribute}>
                          {skill.level.toUpperCase()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <div className={styles.cyberpunkOverlay}></div>
              </div>
            </div>
          ) : (
            <>
              <h2 className={styles.title}>Skills</h2>
              <div className={styles.loe}>
                <p className={styles.description}>
                  Level of Experience:
                </p>
                <div className={styles.levels}>
                  <span className={styles.high}>High</span>
                  <span className={styles.mid}>Mid</span>
                  <span className={styles.low}>Low</span>
                </div> 
              </div>
              
              <motion.div 
                className={styles.skillsGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
              >
                {frontendSkills.map((skill, index) => (
                  <motion.div 
                    key={`frontend-${index}`} 
                    className={`${styles.skillTag} ${styles[skill.level]}`}
                    variants={skillVariants}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className={styles.skillsGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                style={{ marginTop: '20px' }}
              >
                {backendSkills.map((skill, index) => (
                  <motion.div 
                    key={`backend-${index}`} 
                    className={`${styles.skillTag} ${styles[skill.level]}`}
                    variants={skillVariants}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className={styles.skillsGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                style={{ marginTop: '20px' }}
              >
                {otherSkills.map((skill, index) => (
                  <motion.div 
                    key={`other-${index}`} 
                    className={`${styles.skillTag} ${styles[skill.level]}`}
                    variants={skillVariants}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
 
export default Skills;
