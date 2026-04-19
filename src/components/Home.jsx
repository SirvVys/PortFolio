import { useEffect, useRef } from "react";
import "./Home.css";
 
const TAGLINE = "Developer & Designer";
const HEADLINE_LINES = ["Building", "things for", "the web."];
const INTRO = "I craft interfaces that feel alive — where motion, type, and code converge into something worth remembering.";
const FEATURED_WORKS = [
  { title: "",    year: "", tags: ""},
  { title: "",    year: "", tags: "" },
  { title: "",    year: "", tags: "" },
];
 
export default function Home({ navigate }) {
  const headRef = useRef(null);
 
  useEffect(() => {
    const spans = headRef.current?.querySelectorAll(".home__word");
    spans?.forEach((s, i) => {
      s.style.animationDelay = `${i * 0.09}s`;
    });
  }, []);
 
  return (
    <section className="home">
      <div className="home__hero">
        <p className="home__tagline">{TAGLINE}</p>
 
        <h1 className="home__headline" ref={headRef}>
          {HEADLINE_LINES.map((line, li) => (
            <span className="home__line" key={li}>
              {line.split(" ").map((word, wi) => (
                <span className="home__word" key={wi}>{word}&nbsp;</span>
              ))}
            </span>
          ))}
        </h1>
 
        <p className="home__intro">{INTRO}</p>
 
        <button className="home__cta" onClick={() => navigate("projects")}>
          View Work <span className="home__cta-arrow">→</span>
        </button>
      </div>
 
      <div className="home__works">
        <p className="home__works-label">Selected Works</p>
        <ul className="home__works-list">
          {FEATURED_WORKS.map((w, i) => (
            <li
              key={i}
              className="home__work-item"
              onClick={() => navigate("projects")}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <span className="home__work-title">{w.title}</span>
              <span className="home__work-meta">{w.year} / {w.tags}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}