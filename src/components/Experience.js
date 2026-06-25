import React from 'react';
import { useInView } from '../hooks/useInView';

const EXPERIENCES = [
  {
    company: 'XP Inc.',
    role: 'Software Engineer',
    period: 'Nov 2024 – Present',
    location: 'São Paulo, Brazil · Hybrid',
    context: "Brazil's most significant investment/brokerage firm, serving 4M+ clients.",
    achievements: [
      'Led development of two new credit-card products for private banking clients, resulting in 15,000+ cards issued and measurable growth in assets under management (AUM)',
      'Designed system architecture using the Factory pattern to support product-specific behavior without modifying existing code, preserving the Open/Closed Principle and reducing regression risk',
      'Built a risk-based pricing engine that clusters customers by credit score and personalizes interest rates per segment, improving portfolio returns on high-risk segments while increasing competitiveness for low-risk customers',
      'Maintain large-scale, high-availability systems for credit decisioning, limit assignment, and collections across the Credit & Collections division',
    ],
    stack: ['.NET', 'C#', 'Microservices', 'Kafka', 'Docker'],
  },
  {
    company: 'Banco Safra',
    role: 'Full Stack Developer',
    period: 'Jun 2022 – Oct 2024',
    location: 'São Paulo, Brazil · Remote',
    context: "One of Brazil's largest private banks, with 100+ years in wealth management and private banking.",
    achievements: [
      'Rebuilt the bank\'s customer support platform from scratch, routing 100K+ requests daily to the correct back-office teams',
      'Reduced SLA resolution time by 50% through support-workflow optimization',
      'Cut time-to-market for new workflows from weeks to 1 day by redesigning the underlying SQL database schema',
      'Delivered full-stack features end-to-end across a C#/.NET backend and an Angular frontend in an Agile team',
    ],
    stack: ['.NET', 'C#', 'Angular', 'SQL Server', 'Redis', 'Microservices'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className={`section experience${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__card">
                <div className="exp__header">
                  <div className="exp__info">
                    <h3 className="exp__role">{exp.role}</h3>
                    <span className="exp__company">{exp.company}</span>
                  </div>
                  <div className="exp__meta">
                    <span className="exp__period">{exp.period}</span>
                    <span className="exp__location">{exp.location}</span>
                  </div>
                </div>
                <p className="exp__context">{exp.context}</p>
                <ul className="exp__achievements">
                  {exp.achievements.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
                <div className="exp__stack">
                  {exp.stack.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
