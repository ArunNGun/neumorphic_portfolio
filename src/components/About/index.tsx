'use client'
import React from 'react'
import Card from '../Card';
import styles from './about.module.css';
import CyberpunkAboutTerminal from '../CyberpunkAboutTerminal';
import { useCyberpunk } from '../../context/CyberpunkContext';

const About = () => {
  const { cyberpunkMode } = useCyberpunk();

  return (
    <>
      {!cyberpunkMode && (
        <Card>
          <div className={styles.container}>
            <h2 className={styles.title}>About Me</h2>
            <p 
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: "Hey there 👋 I'm <strong>Arun</strong>, a <strong>Full-stack AI Engineer</strong> with over 5 years of experience building robust, scalable applications across the enterprise ecosystem. I specialize in creating impactful user experiences using the <strong>MERN stack</strong>, and I'm currently diving deep into the world of <strong>AI, microservices, and cloud-native architectures</strong> at <strong>Telus Digital</strong>."
              }}
            />
            <p 
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: "Right now, I'm working on integrating <strong>gRPC</strong> and <strong>GCP Pub/Sub</strong> in our production-grade micro frontends to enable high-performance, event-driven systems. My work often bridges the gap between frontend finesse and backend resilience—building <strong>micro-frontend starter kits</strong>, designing infra flows to fetch secrets securely on <strong>GCP</strong>, and rolling out reusable component libraries used by multiple teams."
              }}
            />
            <p 
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: "In the AI space, I tinker with <strong>MCP servers</strong>, <strong>prompt engineering</strong>, and have actively contributed to building <strong>AI-powered tools</strong> that enhance productivity across our digital platform. My team snagged <strong>3rd place</strong> in a <strong>Telus-wide AI Hackathon</strong>, which was an amazing ride!"
              }}
            />
            <p 
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: "When I'm not coding, you'll usually find me jamming on my guitar, gaming, or nerding out over new tech. I love pushing the limits of what's possible—whether that's building smarter systems, exploring new dev workflows, or helping fellow engineers level up."
              }}
            />
            <p 
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: "If you&apos;re into <strong>clean code</strong>, cool projects, and conversations about tech (or music and Anime!), we'll probably get along just fine :)"
              }}
            />
          </div>
        </Card>
      )}
      
      <Card>
        <CyberpunkAboutTerminal />
      </Card>
    </>
  );
}

export default About;
