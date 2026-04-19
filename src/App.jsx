import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
 
export default function App() {
  const [section, setSection] = useState("home");
  const [transitioning, setTransitioning] = useState(false);
 
  const navigate = (target) => {
    if (target === section) return;
    setTransitioning(true);
    setTimeout(() => {
      setSection(target);
      setTransitioning(false);
    }, 400);
  };
 
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
 
  const renderSection = () => {
    switch (section) {
      case "home": return <Home navigate={navigate} />;
      case "about": return <About />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <Home navigate={navigate} />;
    }
  };
 
  return (
    <div className="app">
      <Navbar current={section} navigate={navigate} />
      <main className={`page ${transitioning ? "fade-out" : "fade-in"}`}>
        {renderSection()}
      </main>
    </div>
  );
}