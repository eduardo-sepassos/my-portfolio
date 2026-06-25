import React from 'react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className={`section contact${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section__container contact__inner">
        <h2 className="section__title">Get in Touch</h2>
        <p className="contact__text">
          Reach out on LinkedIn or explore my work on GitHub.
        </p>
        <div className="contact__links">
          <a
            href="https://github.com/eduardo-sepassos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/eduardo-passos-438528189"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            LinkedIn
          </a>
          <a href="mailto:eduardo.sepassos@gmail.com" className="btn btn--ghost">
            Email
          </a>
        </div>
        <p className="contact__footer">Eduardo Passos · São Paulo, Brazil</p>
      </div>
    </section>
  );
}
