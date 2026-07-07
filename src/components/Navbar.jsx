import { useState, useEffect } from 'react';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 150; // offset for navbar height and better sensitivity

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <li><a href="#home" className={activeSection === 'home' || activeSection === '' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''}>Certificates</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
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
