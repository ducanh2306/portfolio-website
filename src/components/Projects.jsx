const Projects = () => {
  const projectList = [
    { title: 'BI Dashboard', desc: 'Interactive dashboard for sales data analysis designed to empower business decisions with real-time metrics.', tech: 'React, Recharts, PowerBI' },
    { title: 'E-commerce API', desc: 'RESTful API built for robust product management, secure authentication, and scalable transactions.', tech: 'Node.js, Express, PostgreSQL' },
    { title: 'Portfolio Website', desc: 'Modern, performant, and fully animated personal portfolio using React and Vite.', tech: 'React, CSS, Vite' },
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '50px' }}>
          Featured <span style={{ color: 'var(--accent-color)' }}>Projects</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%' }}>
          {projectList.map((p, i) => (
             <div key={i} className="project-card">
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '15px' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-primary)', opacity: 0.8, marginBottom: '20px', lineHeight: 1.6 }}>{p.desc}</p>
              <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 600 }}>{p.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
