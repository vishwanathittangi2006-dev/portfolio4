import "./pages.css";

function Contact() {
  const links = [
    {
      label: "email",
      value: "vishwanathittangi2006@gamil.com",
      href: "mailto:vishwanathittangi2006@gamil.com"
    }
  ];

  return (
    <div className="page container">
      <p className="eyebrow">04 — contact</p>
      <h2>Let's talk</h2>
      <p className="hero-lede">
        Feel free to reach out — whether it's about an internship, a project,
        or just to say hi.
      </p>

      <div className="contact-grid">
        {links.map((link) => (
          <a
            className="card contact-card"
            href={link.href}
            key={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            <span className="fact-label">{link.label}</span>
            <span className="fact-value">{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
