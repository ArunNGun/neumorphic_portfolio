'use client'
import React from 'react'
import Card from '../Card';
import styles from './skills.module.css';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', level: 'high' },
  { name: 'JavaScript', level: 'high' },
  { name: 'TypeScript', level: 'high' },
  { name: 'Open AI APIs', level: 'high' },
  { name: 'React Native', level: 'high' },
  { name: 'Prompt Engineering', level: 'high' },
  { name: 'GPT-3', level: 'high' },
  { name: 'GPT-4', level: 'high' },
  { name: 'CSS', level: 'high' },
  { name: 'NextJs', level: 'high' },
  { name: 'Zustand', level: 'high' },
  { name: 'Redux', level: 'high' },
  { name: 'Frontend', level: 'high' },
  { name: 'Micro-frontend', level: 'high' },
  { name: 'Storybook', level: 'high' },
  { name: 'Node', level: 'high' },
  { name: 'Express', level: 'high' },
  { name: 'MongoDB', level: 'high' },
  { name: 'NoSQL', level: 'high' },
  { name: 'GraphQL', level: 'high' },
  { name: 'Backend', level: 'high' },
  { name: 'Full-Stack', level: 'high' },
  { name: 'MERN', level: 'high' },
  { name: 'Microservices', level: 'high' },
  { name: 'Jest', level: 'high' },
  { name: 'React Testing Library', level: 'high' },
  { name: 'Enzyme', level: 'high' },
  { name: 'Unit Testing', level: 'high' },
  { name: 'CI/CD', level: 'mid' },
  { name: 'Github actions', level: 'mid' },
  { name: 'webpack5', level: 'mid' },
  { name: 'GCP', level: 'mid' },
  { name: 'Openshift 4', level: 'mid' },
  { name: 'Unleash', level: 'high' },
  { name: 'Adobe analytics', level: 'mid' },
  { name: 'C', level: 'high' },
  { name: 'C++', level: 'low' },
  { name: 'Java', level: 'low' },
  { name: 'Python', level: 'mid' },
  { name: 'OOP', level: 'mid' },
  { name: 'Unreal Engine 4', level: 'mid' },
  { name: 'Game Development', level: 'mid' },
  { name: 'English', level: 'high' },
  { name: 'Hindi', level: 'high' }
]


const Skills = () => {
  // Container animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Reduced stagger time for more skills
        delayChildren: 0.1 // Reduced delay for faster start
      }
    }
  };
  
  // Individual skill tag animation variant
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
        damping: 15, // Slightly less bouncy for faster animation
        stiffness: 300, // Faster spring
        duration: 0.3 // Ensure animation completes quickly
      }
    }
  };
  
  // Group skills by category
  const frontendSkills = skillsData.filter(skill => 
    ['React', 'JavaScript', 'TypeScript', 'CSS', 'NextJs', 'Zustand', 'Redux', 'Frontend', 'Micro-frontend', 'Storybook', 'React Native', 'Prompt Engineering', 'GPT-3', 'GPT-4', 'Open AI APIs'].includes(skill.name)
  );
  
  const backendSkills = skillsData.filter(skill => 
    ['Node', 'Express', 'MongoDB', 'NoSQL', 'GraphQL', 'Backend', 'Full-Stack', 'MERN', 'Microservices'].includes(skill.name)
  );
  
  const otherSkills = skillsData.filter(skill => 
    !frontendSkills.includes(skill) && !backendSkills.includes(skill)
  );

  return (
    <Card>
      <div style={{ padding: '20px', marginTop: '36px' }}>
        <div className={styles.container}>
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
          
          {/* Frontend Skills */}
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
          
          {/* Backend Skills */}
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
          
          {/* Other Skills */}
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
        </div>
      </div>
    </Card>
  );
}
 
export default Skills;
