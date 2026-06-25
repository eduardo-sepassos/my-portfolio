import React from 'react';
import { useInView } from '../hooks/useInView';

const SKILL_GROUPS = [
  {
    category: 'Backend',
    skills: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'Dapper'],
  },
  {
    category: 'Frontend',
    skills: ['Angular', 'React', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Architecture',
    skills: ['Microservices', 'Event-Driven', 'REST APIs', 'Design Patterns'],
  },
  {
    category: 'Messaging & Data',
    skills: ['Kafka', 'SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Microsoft Azure', 'AWS', 'Docker', 'CI/CD', 'Git'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className={`section skills${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Skills</h2>
        <div className="skills__grid">
          {SKILL_GROUPS.map(({ category, skills }) => (
            <div key={category} className="skills__group">
              <h3 className="skills__category">{category}</h3>
              <div className="skills__tags">
                {skills.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
