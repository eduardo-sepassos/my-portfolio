import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__avatar-wrap">
          <img src="/avatar.jpg" alt="Eduardo Passos" className="hero__avatar" />
        </div>
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Eduardo Passos</h1>
        <h2 className="hero__title">Full Stack Software Engineer</h2>
        <p className="hero__subtitle">
          Building high-throughput financial systems in .NET/C# — microservices, event-driven architecture, and full-stack delivery from API design to frontend.
        </p>
        <div className="hero__ctas">
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
        </div>
      </div>
    </section>
  );
}
