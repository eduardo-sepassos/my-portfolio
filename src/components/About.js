import React from 'react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className={`section about${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section__container">
        <h2 className="section__title">About</h2>
        <div className="about__body">
          <div className="about__text">
            <p>
              I'm a software engineer with 4+ years building and scaling systems for the financial sector in Brazil, currently at XP Inc and previously at Banco Safra. My core stack is .NET/C#, with a specialization in microservices and event-driven architecture for high-throughput systems serving 1.5M+ users.
            </p>
            <p>
              At XP Inc, I led development of two new credit-card products for private banking clients (15,000+ cards issued), designed a Factory-pattern architecture that lets product-specific behavior be added without touching existing code, and built a risk-based pricing engine that personalizes interest rates by credit segment.
            </p>
            <p>
              At Banco Safra I rebuilt the bank's customer support platform from scratch, cutting SLA resolution time by 50% and reducing time-to-market for new workflows from weeks to a single day. That role was full-stack: C#/.NET on the backend, Angular on the frontend.
            </p>
            <p>
              I work comfortably in async, English-first distributed teams. Most of my technical communication and documentation is already in English.
            </p>
          </div>
          <div className="about__education">
            <h3 className="about__edu-title">Education</h3>
            <ul className="about__edu-list">
              <li>
                <span className="about__edu-degree">MBA, Software Engineering</span>
                <span className="about__edu-school">USP — University of São Paulo</span>
              </li>
              <li>
                <span className="about__edu-degree">B.Eng., Industrial Engineering</span>
                <span className="about__edu-school">UFSCar — Federal University of São Carlos</span>
              </li>
              <li>
                <span className="about__edu-degree">Web Full Stack Development</span>
                <span className="about__edu-school">Ada Tech</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
