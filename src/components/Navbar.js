import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">EP</a>

      <button
        className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
