const Skills = () => {
  const skillsList = [
    { name: 'Python', icon: '🐍' },
    { name: 'Pandas, NumPy', icon: '🐼' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'C++', icon: '⚙️' },
    { name: 'HTML / CSS / JS', icon: '🎨' },
  ];

  return (
    <section id="skills" style={{ padding: '100px 0', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '50px' }}>
          My <span style={{ color: 'var(--accent-color)' }}>Skills</span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', maxWidth: '900px' }}>
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-badge">
              <span>{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
