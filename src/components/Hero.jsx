import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import facebookIcon from '../assets/facebook.svg';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-wrapper">
        
        {/* Left Side: Text */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">
              Hi,<br/>
              I'm <span className="text-accent">Duc Anh (Andy)</span>
            </span>
            <span className="hero-title-sub">
              Business Intelligence Infrastructure Systems Student | Computer Science Background | Data Analytics
            </span>
          </h1>
          <p className="hero-desc">
            I build data-driven dashboards and applications that help people understand data.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" style={{width: 'fit-content'}}>
              Contact
            </button>
            <a href={`${import.meta.env.BASE_URL}Resume_DUCANHNGO.pdf`} download className="btn btn-outline">
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links-wrapper">
            <a href="https://www.linkedin.com/in/duc-anh-ngo-7ba68820b/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://github.com/ducanh2306" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a>
            <a href="https://www.facebook.com/ngoducanh2306/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
          </div>
        </div>

        {/* Right Side: Profile Shape */}
        <div className="hero-image-wrapper">
          <div className="hero-profile-shape">
            <img src={profilePic} alt="Duc Anh Ngo" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
