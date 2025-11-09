const ProjectCard = ({ title, desc, tech, demoLink, codeLink }) => {
  return (
    <div className="project-card glassmorphism fade-in">
      <h4 className="text-white fw-bold">{title}</h4>
      <p className="text-light">{desc}</p>

      <div className="tech-tags mb-3">
        {tech.map((t, i) => (
          <span key={i} className="badge bg-secondary me-1">{t}</span>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <a href={demoLink} target="_blank" className="btn btn-sm btn-outline-info">Live Demo</a>
        <a href={codeLink} target="_blank" className="btn btn-sm btn-outline-light">Source Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
