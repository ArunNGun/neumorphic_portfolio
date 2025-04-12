import React from 'react'
import Card from '../Card';
import styles from './experience.module.css';

const exp = [
  {
    title: "Lead Software Engineer",
    company: "TELUS Digital",
    year: "May 2024 - Present (1 yr)",
    description: [
      "Leading development teams in designing and implementing digital solutions",
      "Architecting and developing web applications using modern JavaScript frameworks",
      "Mentoring junior developers and conducting code reviews"
    ],
    techStack: [
      "React", "Node.js", "Express.js", "TypeScript", "GraphQL", "Microservices"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "TELUS Digital",
    year: "Mar 2023 - Jun 2024 (1 yr 4 mos)",
    description: [
      "Developed responsive web applications with Express.js and modern frontend frameworks",
      "Implemented microservices architecture for scalable applications",
      "Collaborated with UX/UI designers to create intuitive user experiences"
    ],
    techStack: [
      "React", "Redux", "Node.js", "Express.js", "MongoDB", "Responsive Web Design"
    ]
  },
  {
    title: "Software Engineer",
    company: "TELUS Digital",
    year: "Jun 2021 - Mar 2023 (1 yr 10 mos)",
    description: [
      "Built and maintained web applications using Express.js and responsive design principles",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in agile development processes and sprint planning"
    ],
    techStack: [
      "JavaScript", "Express.js", "React", "Responsive Web Design", "RESTful APIs"
    ]
  },
  {
    title: "Project Engineer",
    company: "Wipro Limited",
    year: "Sep 2019 - Jun 2021 (1 yr 10 mos)",
    description: [
      "Developed web applications using Express.js and responsive design techniques",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Worked on frontend and backend development for enterprise applications"
    ],
    techStack: [
      "Express.js", "JavaScript", "Responsive Web Design", "HTML/CSS", "Git"
    ]
  }
]

const Experience = () => {
  return ( 
    <Card>
      <div style={{ padding: '20px', marginTop: '36px' }}>
        <h2 className={styles.mainTitle}>Experience Timeline</h2>
        <div className={styles.timelineCardsContiner}>
        {
          exp.map((item, index) => (
            <Card invert key={index}>
           <div className={styles.timelineCard}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.year}>{item.year}</p>
              <ul className={styles.descriptionList}>
                {item.description.map((desc, i) => (
                  <li key={i} className={styles.description}>{desc}</li>
                ))}
              </ul>
              <div className={styles.techStack}>
                {item.techStack.map((tech, i) => (
                  <span key={i} className={styles.techItem}>{tech}</span>
                ))}
              </div>
              </div>
            </Card>
          ))
        }
        </div>
      </div>
    </Card>
   );
}
 
export default Experience;
