const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          About <span style={{ color: 'var(--accent-color)' }}>Me</span>
        </h2>
        <div style={{ maxWidth: '800px', fontSize: '1.1rem', color: 'var(--text-primary)', opacity: 0.9, lineHeight: 1.8 }}>
          <p style={{ marginBottom: '20px' }}>
            I am a passionate Computer Science & Business Intelligence student with a strong focus on building scalable web applications and analyzing complex data structures. I aim to bridge the gap between software engineering and data-driven business decisions.
          </p>
          <p>
            Constantly learning and adapting, I combine technical proficiency with strategic thinking to deliver solutions that are not just functional, but also provide actionable insights and exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
