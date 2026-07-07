import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming & Data',
      skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Data Pre-processing', 'Data Modelling']
    },
    {
      title: 'BI & Visualization',
      skills: ['Power BI', 'Tableau', 'Excel', 'Jupyter Notebook']
    },
    {
      title: 'Web Development',
      skills: ['Django', 'C#', 'JavaScript', 'HTML5', 'CSS', 'Java', 'C/C++', 'Streamlit']
    },
    {
      title: 'Database & Cloud',
      skills: ['SQL Server', 'Azure SQL', 'AWS Fundamentals', 'Data Management', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'Microsoft Office', 'WordPress', 'Claude']
    },
    {
      title: 'Core Strengths',
      skills: ['Data Analysis', 'Dashboard Dev', 'Machine Learning', 'Problem Solving', 'Team Collaboration', 'Communication', 'Risk Analytics']
    }
  ];

  return (
    <section id="skills" style={{ padding: '100px 0', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ textAlign: 'left', marginBottom: '50px', width: '100%' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
            Skills & <span style={{ color: 'var(--accent-color)' }}>Tools</span>
          </h2>
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
        </div>

        <div className="skills-grid-columns" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px', width: '100%' }}>
          {categories.map((cat, i) => (
            <div key={i} className="skills-column">
              <h3 className="skills-column-title">{cat.title}</h3>
              <ul className="skills-list">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="skills-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
