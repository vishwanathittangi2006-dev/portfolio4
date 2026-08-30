import "./pages.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio (this site)",
      description:
        "A multi-page portfolio built with React and React Router, used as a home base to showcase what I'm learning and building along the way.",
      tags: ["React", "Vite", "React Router", "CSS"]
    }
  ];

  return (
    <div className="page container">
      <p className="eyebrow">03 — projects</p>
      <h2>Things I've built</h2>

      <div className="project-grid section-gap">
        {projects.map((project) => (
          <div className="card project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="card project-card project-card-empty">
          + add your next project here
        </div>
      </div>
    </div>
  );
}

export default Projects;
