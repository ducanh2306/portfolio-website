const Projects = () => {
  const projectList = [
    { 
      title: 'Dashboard of Airport Authority', 
      desc: 'Interactive Power BI dashboard and data pre-processing in Excel to analyze airport KPIs including delays, cancellations, and on-time performance. Features time-series trends and map visualizations with source-destination drill-throughs, reducing operational review time by ~40%.', 
      tech: 'Power BI, Data Analysis',
      liveLink: 'https://app.powerbi.com/reportEmbed?reportId=88a0b800-97f9-4cf4-b8c5-423228bb4db2&autoAuth=true&ctid=ec1bd924-0a6a-4aa9-aa89-c980316c0449'
    },
    { 
      title: 'SmartSpend', 
      desc: 'A Django web app and Python data analysis study evaluating personal spending behavior against the 50/30/20 budget rule using a 3,000 record dataset.', 
      tech: 'Django, Python, Data Analysis', 
      liveLink: 'https://income-tracker-7xc2.onrender.com/' 
    },
    { 
      title: 'Hospital Operation Dashboard', 
      desc: 'A role-based Power BI dashboard built on a normalized 11-table SQL Server relational database. Features enforced keys and constraints to prevent data duplication, utilizing 15 custom business queries to deliver accurate reporting KPIs and actionable operational insights to healthcare stakeholders.', 
      tech: 'Power BI, SQL Server, Data Modeling', 
      liveLink: 'https://app.powerbi.com/groups/me/reports/04638c98-1cee-4ae9-953d-36f317568b67?ctid=ec1bd924-0a6a-4aa9-aa89-c980316c0449&pbi_source=linkShare' 
    },
    { 
      title: 'Portfolio Website', 
      desc: 'Modern, performant, and fully animated personal portfolio using React and Vite.', 
      tech: 'React, CSS, Vite' 
    },
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '50px' }}>
          Featured <span style={{ color: 'var(--accent-color)' }}>Projects</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%' }}>
          {projectList.map((p, i) => (
             <div key={i} className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '15px' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-primary)', opacity: 0.8, marginBottom: '20px', lineHeight: 1.6, flexGrow: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 600 }}>{p.tech}</span>
                {p.liveLink && (
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <a href="https://github.com/ducanh2306" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '12px 30px', fontSize: '1.1rem', backgroundColor: 'transparent', border: '2px solid var(--accent-color)', color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-block' }}>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
