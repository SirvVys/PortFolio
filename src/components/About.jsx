import "./About.css";
const BIO_LINES = [
  "Born in 2008 in Lithuania.",
  "Building things for the web.",
  "I started with HTML & CSS,",
  "fell in love with JavaScript,",
  "and now I'm here — ",
  "figuring it out one project at a time.",
];
 
const SKILLS = [
  { category: "Frontend",  items: ["Html", "CSS", "JavaScript", ""] },
  { category: "Backend",   items: ["Node.js", "Express", "REST APIs"] },
  { category: "Tools",     items: ["Figma", "Git", "Vite", "Vercel"] },
];
 
const EXPERIENCE = [
  { role: "",  org: "",   period: "" },
  { role: "",        org: "",  period: "" },
];
 
export default function About() {
  return (
    <section className="about">
      <header className="about__header">
        <p className="about__label">Info</p>
        <h2 className="about__title">About</h2>
      </header>
 
      <div className="about__body">
        {/* Bio */}
        <div className="about__bio">
          {BIO_LINES.map((line, i) => (
            <p
              key={i}
              className="about__bio-line"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {line}
            </p>
          ))}
        </div>
 
        <div className="about__section">
          <p className="about__section-label">Skills</p>
          <div className="about__skills">
            {SKILLS.map((group, i) => (
              <div key={i} className="about__skill-group">
                <p className="about__skill-cat">{group.category}</p>
                <ul className="about__skill-list">
                  {group.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="about__section">
          <p className="about__section-label">Experience</p>
          <ul className="about__exp-list">
            {EXPERIENCE.map((e, i) => (
              <li key={i} className="about__exp-item">
                <div>
                  <p className="about__exp-role">{e.role}</p>
                  <p className="about__exp-org">{e.org}</p>
                </div>
                <span className="about__exp-period">{e.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}