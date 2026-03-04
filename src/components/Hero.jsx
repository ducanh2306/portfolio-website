import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import facebookIcon from '../assets/facebook.svg';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ display: 'flex', width: '100%', minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
      <div className="container" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left Side: Text */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ display: 'flex', flexDirection: 'column', margin: 0 }}>
            <span style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Hi,<br/>
              I'm <span style={{ color: 'var(--accent-color)' }}>Duc Anh Ngo</span>
            </span>
            <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '10px' }}>
              Computer Science & Business Intelligence Student
            </span>
          </h1>
          
          <button style={{ backgroundColor: 'var(--accent-color)', color: '#fff', padding: '12px 30px', border: 'none', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer', width: 'fit-content', marginTop: '10px' }}>
            Contact
          </button>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <a href="https://www.linkedin.com/in/duc-anh-ngo-7ba68820b/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} /></a>
            <a href="https://github.com/ducanh2306" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} /></a>
            <a href="https://www.facebook.com/ngoducanh2306/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} /></a>
          </div>
        </div>

        {/* Right Side: Profile Shape */}
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ 
            width: '450px', 
            height: '450px', 
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            background: 'linear-gradient(135deg, #2A2A2A, #1A1A1A)',
            position: 'relative'
          }}>
            <img src="/profile.jpg" alt="Duc Anh Ngo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
