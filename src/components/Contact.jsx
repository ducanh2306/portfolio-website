const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-wrapper">
        <h2 className="contact-title">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="contact-desc">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Name" required className="contact-input" />
          <input type="email" placeholder="Email" required className="contact-input" />
          <textarea placeholder="Message" required rows="5" className="contact-textarea"></textarea>
          <button type="submit" className="contact-submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
