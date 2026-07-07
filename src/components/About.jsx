const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          About <span style={{ color: 'var(--accent-color)' }}>Me</span>
        </h2>
        <div style={{ maxWidth: '800px', fontSize: '1.1rem', color: 'var(--text-primary)', opacity: 0.9, lineHeight: 1.8 }}>
          <p style={{ marginBottom: '20px' }}>
            I am a motivated technology and business professional currently studying Business Intelligence Infrastructure Systems at Algonquin College, with a previous academic background in Computer Science.
          </p>
          <p style={{ marginBottom: '20px' }}>
            My experience has helped me develop strong problem-solving, analytical thinking, and business operations skills across both technical and customer-facing environments. I have worked in fast-paced industries where adaptability, teamwork, and efficient decision-making were essential to success.
          </p>
          <p style={{ marginBottom: '20px' }}>
            I am particularly interested in data analysis, business intelligence, cloud technologies, and improving business processes through technology-driven solutions. My goal is to combine technical knowledge with business strategy to help organizations make smarter decisions and operate more efficiently.
          </p>
          <p>
            I am always open to connecting with professionals in technology, business intelligence, data analytics, cloud infrastructure, and business operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
