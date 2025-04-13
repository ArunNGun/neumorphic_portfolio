import React from 'react'
import Card from '../Card';
import styles from './experience.module.css';

const exp = [
  {
    title: "Lead Software Engineer",
    company: "TELUS Digital",
    year: `May 2024 - Present (${formatDuration(new Date('2024-05-01'))})`,
    description: [
      "Leading development teams in designing and implementing <strong>digital solutions</strong>",
      "Implemented <strong>GCP Pub/Sub</strong> to handle <strong>real-time event processing</strong> and <strong>async microservice communication</strong>.",
      "Hands-on experience with <strong>gRPC</strong>, transitioned existing REST services to gRPC for better <strong>performance</strong> and <strong>scalability</strong>",
      "Mentoring junior developers and conducting <strong>code reviews</strong>",
      "Designed and managed <strong>GCP infrastructure</strong>, including <strong>Kubernetes clusters</strong>, ensuring seamless deployment and scaling of applications.",
      "Handled <strong>GCP API Marketplace</strong> registration and integration for <strong>enterprise-level APIs</strong>.",
      "Automated <strong>deployment pipelines</strong> and managed secrets securely using <strong>GCP Secret Manager</strong>.",
      "Monitored and debugged <strong>Kubernetes pods</strong> to ensure high availability and performance of applications.",
    ],
    techStack: [
      "Next.js", "Node.js", "TypeScript", "GraphQL", "Microservices", "GCP", "Kubernetes", 
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
      "Led the design and development of multiple <strong>enterprise-level microservice applications</strong>, serving <strong>30 million customers</strong> using the latest technologies of <strong>Node</strong>, <strong>GraphQL</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>GCP</strong>, and <strong>SQS</strong>.",
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
