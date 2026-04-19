import { useEffect, useState } from "react";
import "./Navbar.css";
 
const links = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact" },
];
 
export default function Navbar({ current, navigate }) {
  const [time, setTime] = useState("");
 
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
 
  return (
    <nav className="navbar">
      <div className="navbar__name">
        {}
        <span className="navbar__name-first">Sirvydas</span>
        <span className="navbar__name-last">Dudėnas</span>
      </div>
 
      <ul className="navbar__links">
        {links.map(({ id, label }) => (
          <li key={id}>
            <button
              className={`navbar__link ${current === id ? "active" : ""}`}
              onClick={() => navigate(id)}
            >
              <span className="navbar__dot">●</span>
              {label}
            </button>
          </li>
        ))}
      </ul>
 
      <div className="navbar__footer">
        <span className="navbar__time">{time}</span>
        <span className="navbar__copy"></span>
      </div>
    </nav>
  );
}

