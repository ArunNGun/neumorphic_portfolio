import React from 'react'
import Card from '../Card';
import styles from './about.module.css';

const About = () => {
  return ( 
    <Card>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I am a Fullstack Developer specialized in MERN stack with over 4 years of experience in enterprise-level application development. Currently working as a Senior Software Developer at Telus International, where I lead the design and development of microservice applications serving 30 million customers.
        </p>
        <p className={styles.description}>
          My expertise includes React, Redux, Node.js, MongoDB, GraphQL, and microservices architecture. I have led the development of multiple reusable components, implemented micro-frontend architecture, and established coding standards that reduced code defects by 20%.
        </p>
        <p className={styles.description}>
          I am recognized for outstanding performance, having received the WOW & BRAVO Award for exceptional contributions to project delivery and team collaboration. I am passionate about knowledge sharing and have conducted educational sessions for both team members and underprivileged students.
        </p>
        <p className={styles.description}>
          In my free time, I work on side projects like game development using Unreal Engine 4, which earned 2nd place at InnoTech 2017. I am always eager to learn new technologies and contribute to innovative solutions.
        </p>

        </div>
    </Card>
   );
}
 
export default About;
