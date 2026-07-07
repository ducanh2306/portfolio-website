import React, { useState, useRef } from 'react';

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);
  const sliderRef = useRef(null);

  const certificateList = [
    {
      title: 'Ubuntu Linux: Essential Commands',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Ubuntu Linux.png`,
      logo: '🐧'
    },
    {
      title: 'Introduction to PostgreSQL',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Introduction to PostgreSQL.png`,
      logo: '🐘'
    },
    {
      title: 'Learning Microsoft SQL Server 2022',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}SQL Server.png`,
      logo: '🗄️'
    },
    {
      title: 'SQL Essential Training',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}SQL Essential Training.png`,
      logo: '📊'
    },
    {
      title: 'Learning Data Analytics Part 2: Extending & Applying Knowledge',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Data Analytic 2.png`,
      logo: '📈'
    },
    {
      title: 'Learning VirtualBox',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Learning VirtualBox.png`,
      logo: '💻'
    },
    {
      title: 'Excel 2016: Working with Dates and Times',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Working with Dates and Times.png`,
      logo: '📅'
    },
    {
      title: 'Excel 2019 Essential Training',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Excel Essential Training.png`,
      logo: '📗'
    },
    {
      title: 'Excel Formulas and Functions Quick Tips 2020',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Excel Fomulas and Fuctions Quick.png`,
      logo: '🧮'
    },
    {
      title: 'Introduction to VMware',
      issuer: 'LinkedIn Learning',
      date: 'Jan 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Introduce to VmWare.png`,
      logo: '☁️'
    },
    {
      title: 'Learning Data Analytics 1: Foundations',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Data Analytic1.png`,
      logo: '📉'
    },
    {
      title: 'Miss Excel\'s Top Productivity Hacks',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2026',
      id: 'Certificate of Completion',
      imageFile: `${import.meta.env.BASE_URL}Productivity Hack.png`,
      logo: '💡'
    }
  ];

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 350; // card width + gap
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 350;
    }
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
              Licenses & <span style={{ color: 'var(--accent-color)' }}>Certifications</span>
            </h2>
            <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--accent-color)', marginBottom: '15px' }}></div>
            <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              View my licenses & certifications
            </p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="slider-btn" onClick={slideLeft} aria-label="Previous Certificate">&larr;</button>
            <button className="slider-btn" onClick={slideRight} aria-label="Next Certificate">&rarr;</button>
          </div>
        </div>
        
        <div className="slider-container" ref={sliderRef}>
          {certificateList.map((c, i) => (
            <div key={i} className="slider-item-cert">
              <div 
                className="certificate-card" 
                style={{ cursor: 'pointer', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                onClick={() => setActiveCert(c)}
              >
                <div>
                  <div className="certificate-header">
                    <span style={{ fontSize: '2rem' }}>{c.logo}</span>
                    <span className="certificate-date">{c.date}</span>
                  </div>
                  <h3 className="certificate-title">{c.title}</h3>
                  <p className="certificate-issuer">{c.issuer}</p>
                </div>
                <div className="certificate-footer" onClick={(e) => e.stopPropagation()}>
                  <span className="certificate-id">{c.id}</span>
                  <button className="certificate-btn" onClick={() => setActiveCert(c)}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setActiveCert(null)} aria-label="Close modal">&times;</button>
            <h3 className="cert-modal-title">{activeCert.title}</h3>
            
            <img 
              src={activeCert.imageFile} 
              alt={activeCert.title} 
              className="cert-modal-img" 
              style={{ maxWidth: '100%', maxHeight: '65vh', borderRadius: '8px', marginBottom: '15px', objectFit: 'contain' }}
            />

            <p className="cert-modal-issuer">{activeCert.issuer} — {activeCert.date}</p>
            <div style={{ marginTop: '15px' }}>
              <a href={activeCert.imageFile} download className="certificate-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Download Image
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
