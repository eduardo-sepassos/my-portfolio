import React from 'react';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
  {
    title: 'Full Stack Finance API',
    description: 'An ASP.NET Core Web API paired with a React frontend demonstrating end-to-end full-stack delivery: authentication, REST API design, EF Core data layer, and a responsive UI consuming the API.',
    stack: ['ASP.NET Core', 'React', 'SQL Server', 'Azure'],
    status: 'In Progress',
    github: 'https://github.com/eduardo-sepassos',
  },
  {
    title: 'Event-Driven Microservices Demo',
    description: 'A multi-service architecture connected via Kafka, containerized with Docker Compose, showcasing the event-driven patterns used in production financial systems — real domain, realistic topology.',
    stack: ['.NET', 'Kafka', 'Docker', 'Microservices'],
    status: 'In Progress',
    github: 'https://github.com/eduardo-sepassos',
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className={`section projects${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__status">{project.status}</span>
              </div>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__stack">
                {project.stack.map(tech => (
                  <span key={tech} className="tag tag--small">{tech}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
