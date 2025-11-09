import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio menggunakan React + Glassmorphism UI.",
      tech: ["React", "Bootstrap", "CSS3"],
      demoLink: "https://my-portfolio-sandy-sigma-30.vercel.app/",
      codeLink: "https://github.com/benediktuspiuskanyan2003/my-portfolio"
    },
    {
      title: "WidyChat (RAG Chatbot)",
      desc: "AI Chatbot universitas berbasis RAG dengan PDF knowledge base.",
      tech: ["Python", "FastAPI", "LangChain", "ChromaDB"],
      demoLink: "https://widychatbot-01.vercel.app/",
      codeLink: "https://github.com/bpiusk/widychatbot_01"
    }
  ];

  return (
    <section id="projects" className="projects-section container text-center fade-in">
      <h2 className="text-white fw-bold mb-4">Projects</h2>
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
