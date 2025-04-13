import React from 'react'
import Card from '../Card';
import styles from './projects.module.css';

const projectsData = [
    {
        "intro": "Heavily themed and animated Portfolio inspired by Bento grid design, multi theme, implemented using NextJS",
        "quickIntro": "Bento style portfolio",
        "imageSrc": "https://imgur.com/yZiiZHD.png",
        "tags": [
            "react",
            "NextJS",
            "framer-motion",
            "fontawesome",
        ],
        "projectLink": "https://a--k.vercel.app/",
        "id": 1,
        "source_code": "https://github.com/ArunNGun/bento_port",
        "title": "Bento grid style portfolio"
    },
    {
        "intro": "Portfolio inspired by visual-studio code editor, multi theme, implemented using NextJS-13 ",
        "quickIntro": "vs-code style portfolio",
        "imageSrc": "https://i.imgur.com/Z2r1G8U.png",
        "tags": [
            "react",
            "NextJS",
            "framer-motion",
            "Notion APIs",
        ],
        "projectLink": "https://ak-code.vercel.app/",
        "id": 2,
        "source_code": "https://github.com/ArunNGun/bento_port",
        "title": "VS-code themed page"
    },
    {
        "intro": "A simple landing page with a complex 3D-parallax effect.",
        "quickIntro": "3D-prallex effect, vanilla JS.",
        "imageSrc": "https://i.imgur.com/QThn02Y.jpg",
        "tags": [
            "react",
            "html5"
        ],
        "projectLink": "https://arunngun.github.io/3D-parallax/",
        "id": 3,
        "source_code": "https://github.com/ArunNGun/3D-parallax",
        "title": "Parallax-3D"
    },
    {
        "intro": "A NextJs based webapp which gives compressive insights about pull-requests and developers/reviewers in your organization/team.",
        "quickIntro": "NextJs app for better Github overview.",
        "imageSrc": "https://i.imgur.com/1Z8TYuA.png",
        "tags": [
            "react",
            "git"
        ],
        "projectLink": "https://gh-metrics.vercel.app/",
        "id": 4,
        "source_code": "https://github.com/ArunNGun/git-metrics",
        "title": "gh-metrics"
    },
    {
        "intro": "Expense tracker / money manager which can be controlled by using your voice as well",
        "quickIntro": "ReactJs app for tracking expense using voice.",
        "imageSrc": "https://i.imgur.com/g9ZMJa4.jpg",
        "tags": [
            "react"
        ],
        "projectLink": "Expense Tracker (expensetracker404.netlify.app)",
        "id": 5,
        "source_code": "https://github.com/ArunNGun/Expense-Tracker_voice_react",
        "title": "Voice-expense-tracker"
    },
    {
        "intro": "A js based drumkit, produces drum sounds when specified keys are pressed on keyboard or by mouse.",
        "quickIntro": "A fun Js app to generate music.",
        "imageSrc": "https://i.imgur.com/BO14UTx.png",
        "tags": [
            "js"
        ],
        "projectLink": "https://arunngun.github.io/Drumkit/",
        "id": 6,
        "source_code": "https://github.com/ArunNGun/Drumkit",
        "title": "Drumkit"
    },
    {
        "intro": "An animated react landing page, with soothing music, which gives you random 100 reasons to live life.",
        "quickIntro": "a react app that gives 100 reasons to live.",
        "imageSrc": "https://i.imgur.com/lL1MkIU.png",
        "tags": [
            "react"
        ],
        "projectLink": "https://nodie2day.vercel.app/",
        "id": 7,
        "source_code": "https://github.com/ArunNGun/nodie2day",
        "title": "NoDie2Day"
    },
    {
        "intro": "An elegant landing page for a shopping website with smooth animations.",
        "quickIntro": "simple and clean landing page.",
        "imageSrc": "https://i.imgur.com/Jva7aEb.png",
        "tags": [
            "html5",
            "js"
        ],
        "projectLink": "https://arunngun.github.io/triply-html-css/",
        "id": 8,
        "source_code": "https://github.com/ArunNGun/triply-html-css",
        "title": "triply"
    }
];

const Projects = () => {
  return (
    <Card>
      <div style={{ padding: '20px', marginTop: '36px' }}>
        <h2 className={styles.mainTitle}>Personal Projects (hover on the titles...)</h2>
        <div className={styles.projectsContainer}>
          {projectsData.map((project) => (
            <Card invert key={project.id}>
              <div className={styles.projectCard}>
                <div className={styles.projectTitle}>
                  <a 
                    href={project.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.titleLink}
                  >
                    <h3>{project.title}</h3>
                  </a>
                  <div className={styles.projectPopup}>
                    <div className={styles.popupContent}>
                      <div className={styles.imageContainer}>
                        <img 
                          src={project.imageSrc} 
                          alt={project.title} 
                          className={styles.projectImage}
                        />
                      </div>
                      <h4>{project.title}</h4>
                      <p>{project.intro}</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.projectContent}>
                  <div className={styles.projectDescription}>
                    <p>{project.intro}</p>
                    
                    <div className={styles.tagsContainer}>
                      {project.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.projectLinks}>
                    <a 
                      href={project.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.iconLink}
                      title="View Project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a 
                      href={project.source_code} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.iconLink}
                      title="Source Code"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
 
export default Projects;
