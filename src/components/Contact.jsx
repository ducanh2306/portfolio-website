const Contact = () => {
  return (
    <section id="contact" style={{ padding: '100px 0', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '30px' }}>
          Get In <span style={{ color: 'var(--accent-color)' }}>Touch</span>
        </h2>
        <p style={{ color: 'var(--text-primary)', opacity: 0.8, maxWidth: '600px', marginBottom: '40px', fontSize: '1.1rem' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:ngoducanh.2306@gmail.com" className="btn" style={{ padding: '15px 40px', borderRadius: '8px', fontSize: '1.2rem' }}>
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
