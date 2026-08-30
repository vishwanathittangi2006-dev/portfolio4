import "./pages.css";

function About() {
  return (
    <div className="page container">
      <p className="eyebrow">01 — about me</p>
      <h2>A little about me</h2>

      <div className="split section-gap">
        <div>
          <p>
            I'm Vishwanath, a B.Tech student in Artificial Intelligence and
            Machine Learning at SDM College of Engineering and Technology,
            Dharwad. I'm passionate about programming, AI/ML, and problem
            solving — I enjoy figuring out how things work and building
            things that actually solve a problem.
          </p>
          <p>
            Right now I'm building my skills in Python and C, working through
            Data Structures and Algorithms, and putting what I learn into
            practical projects.
          </p>
        </div>

        <div className="card fact-list">
          <div>
            <span className="fact-label">education</span>
            <span className="fact-value">B.Tech – AI &amp; Machine Learning</span>
          </div>
          <div>
            <span className="fact-label">college</span>
            <span className="fact-value">SDM College of Engineering and Technology, Dharwad</span>
          </div>
          <div>
            <span className="fact-label">languages</span>
            <span className="fact-value">Python &amp; C</span>
          </div>
          <div>
            <span className="fact-label">currently learning</span>
            <span className="fact-value">Data Structures &amp; Algorithms</span>
          </div>
          <div>
            <span className="fact-label">interested in</span>
            <span className="fact-value">AI/ML &amp; building practical projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
