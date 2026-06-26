import React from 'react'
import Card from '../Card';
import styles from './experience.module.css';

const exp = [
  {
    title: "Lead Software Engineer",
    company: "TELUS Digital",
    year: `May 2024 - Present (${formatDuration(new Date('2024-05-01'))})`,
    description: [
      "Led a squad of <strong>6 engineers</strong>, owning full delivery of <strong>10+ micro-frontends end-to-end</strong> — from infra setup, CI/CD pipelines, and MFE + BFF architecture through requirement refinement and production rollout.",
      "Designed and built <strong>BFF services</strong> integrating <strong>gRPC APIs and third-party vendors</strong> for real-time enterprise applications, enabling seamless data orchestration across distributed micro-frontends.",
      "Built internal <strong>AI workflows</strong> including a <strong>PR review automation tool</strong>, <strong>RAG pipelines</strong>, and <strong>n8n-powered automation flows</strong> to accelerate development productivity across the organisation.",
      "Implemented <strong>GCP Pub/Sub</strong> for real-time event processing and asynchronous microservice communication, enabling <strong>event-driven architecture</strong> at scale.",
      "Designed a <strong>Micro-frontend starter kit</strong> adopted across multiple product teams, reducing application complexity and enabling faster independent deployments.",
      "Traveled onsite to <strong>Canada</strong> to collaborate directly with product owners, improving requirement clarity and eliminating blockers across cross-functional teams.",
      "Conducted <strong>20+ technical engineering interviews</strong> bi-weekly, evaluating candidates on system design, JavaScript, and React.",
      "Managed <strong>GCP Secret Manager</strong> and <strong>GCP API Marketplace</strong> for enterprise-grade API governance and secrets management across multiple services.",
    ],
    techStack: [
      "Next.js", "Node.js", "TypeScript", "GraphQL", "gRPC", "Microservices", "GCP", "Kubernetes", "RAG", "n8n"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "TELUS Digital",
    year: `Mar 2023 - Jun 2024 (${formatDuration(new Date('2023-03-01'), new Date('2024-06-01'))})`,
    description: [
      "Implemented <strong>coding guidelines</strong> and <strong>unit test standards</strong>, pull-request template for various repos, resulting in a <strong>20% reduction</strong> in code defects and improved team efficiency. ",
      "Designed a <strong>Micro-frontend starter kit</strong>, reducing app complexity and enabling <strong>faster deployments</strong> across teams.",
      "Implemented <strong>microservices architecture</strong> for scalable applications",
      "Developed and optimized <strong>PostgreSQL</strong> database schemas and queries for handling <strong>billing transactions</strong> and related data, ensuring high performance and reliability.",
    ],
    techStack: [
      "React", "Zustand", "Node.js", "GraphQL", "MongoDB", "PostgreSQL", "Microservices"," Redis", "OpenShift"
    ]
  },
  {
    title: "Software Engineer",
    company: "TELUS Digital",
    year: `Jun 2021 - Mar 2023 (${formatDuration(new Date('2021-06-01'), new Date('2023-03-01'))})`,
    description: [
      "Led the design and development of multiple <strong>enterprise-level microservice applications</strong>, serving <strong>10 million customers</strong> using the latest technologies of <strong>Node</strong>, <strong>GraphQL</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>GCP</strong>, and <strong>SQS</strong>.",
      "Implemented coding and unit test guidelines, pull-request template for various repos, resulting in a <strong>20% reduction</strong> in code defects and improved team efficiency.",
      "Led the development of <strong>10+ ReactJS common components</strong> used by multiple projects, from identifying requirements to implementation, testing, setting up <strong>Storybook</strong>, and publishing as <strong>npm packages</strong>.",
    ],
    techStack: [
      "JavaScript", "Express.js", "React", "Responsive Web Design", "RESTful APIs"
    ]
  },
  {
    title: "Project Engineer",
    company: "Wipro Limited",
    year: `Sep 2019 - Jun 2021 (${formatDuration(new Date('2019-09-01'), new Date('2021-06-01'))})`,
    description: [
      "Developed web applications using <strong>Express.js</strong> and <strong>responsive design</strong> techniques",
      "Collaborated with <strong>cross-functional teams</strong> to deliver high-quality software solutions",
      "Worked on <strong>frontend</strong> and <strong>backend</strong> development for <strong>enterprise applications</strong>"
    ],
    techStack: [
      "Express.js", "JavaScript", "HTML/CSS", "Git", "ABAP-SAP"
    ]
  }
];

function formatDuration(startDate: Date, endDate: Date = new Date()): string {
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = '';
  if (years > 0) result += `${years} year${years > 1 ? 's' : ''}`;
  if (months > 0) result += `${result ? ' ' : ''}${months} mo${months > 1 ? 's' : ''}`;
  return result;
}

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
                  <li 
                    key={i} 
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
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
