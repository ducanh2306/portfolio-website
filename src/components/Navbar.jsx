import { useState, useEffect } from 'react';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <a href="#home" style={{ textDecoration: "none", fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "1px" }}>
            <span style={{ color: "var(--accent-color)" }}>D</span>A
          </a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'dark' ? (
            <img src={sunIcon} alt="Light Mode" width="24" height="24" />
          ) : (
            <img src={moonIcon} alt="Dark Mode" width="24" height="24" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
