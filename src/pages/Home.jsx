import { Link } from "react-router-dom";
import "./pages.css";

function Home() {
  const skills = ["Python", "C", "Data Structures & Algorithms", "AI/ML", "Git"];

  return (
    <div className="page container hero">
      <div className="hero-status">
        <span className="hero-status-dot" />
        available for internships
      </div>

      <p className="eyebrow">whoami</p>
      <h1>Hi, I'm Vishwanath.</h1>
      <p className="hero-lede">
        I'm a B.Tech Artificial Intelligence and Machine Learning student
        passionate about programming, AI/ML, and problem solving. I'm
        currently building my skills in Python, C, Data Structures and
        Algorithms, and practical projects.
      </p>

      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">
          view projects →
        </Link>
        <Link to="/contact" className="btn btn-outline">
          get in touch
        </Link>
      </div>

      <p className="eyebrow">currently working with</p>
      <div className="skills-row">
        {skills.map((skill) => (
          <span className="pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Home;
