import "./Contact.css";
 
const EMAIL    = "sirvydas.dudenas@stud.techin.lt";
const SOCIALS  = [
  { label: "GitHub",    url: "https://github.com/SirvVys" },
  { label: "LinkedIn",  url: "" },
  { label: "Twitter/X", url: "https://x.com/SirvVyss" },
    { label: "Instagram", url: "https://www.instagram.com/sirv_vys/" },
];
 
export default function Contact() {
  return (
    <section className="contact">
      <header className="contact__header">
        <p className="contact__label">Get in touch</p>
        <h2 className="contact__title">Contact</h2>
      </header>
 
      <div className="contact__body">
        <p className="contact__intro">
          Have a question, or just want to say hello?<br /> my inbox is open.</p>
 
        <a href={`mailto:${EMAIL}`} className="contact__email">
          {EMAIL}
          <span className="contact__email-arrow"> ↗</span>
        </a>
 
        <div className="contact__divider" />
 
        <ul className="contact__socials">
          {SOCIALS.map((s, i) => (
            <li key={i}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="contact__social-link"
              >
                {s.label} <span className="contact__ext">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}