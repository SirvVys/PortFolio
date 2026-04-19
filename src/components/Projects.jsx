import { useState } from "react";
import "./Projects.css";
 
const PROJECTS = [
  // {
  //   id: 1,
  //   title: "1",
  //   year: "",
  //   tags: ["", "", ""],
  //   description:
  //     "",
  //   url: "",
  // },

];
 
export default function Projects() {
  const [hovered, setHovered] = useState(null);
 
  return (
    <section className="projects">
      <header className="projects__header">
        <p className="projects__label">Work</p>
        <h2 className="projects__title">Projects</h2>
        <p>None impressive yet :]</p>
      </header>
 
      <ul className="projects__list">
        {PROJECTS.map((p, i) => (
          <li
            key={p.id}
            className={`projects__item ${hovered !== null && hovered !== p.id ? "dimmed" : ""}`}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <a href={p.url} target="_blank" rel="noreferrer" className="projects__link">
              <div className="projects__top">
                <span className="projects__item-title">{p.title}</span>
                <span className="projects__item-year">{p.year}</span>
              </div>
              <p className="projects__desc">{p.description}</p>
              <div className="projects__tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="projects__tag">{t}</span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}