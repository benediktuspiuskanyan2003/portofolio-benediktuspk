import { FaReact, FaHtml5, FaCss3, FaJs, FaGithub, FaFigma, FaPython } from "react-icons/fa";
import { SiFlutter, SiFastapi, SiChainlink } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsDatabase } from "react-icons/bs";

const MySkills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiFlutter />, name: "Flutter" },
      ],
    },
    {
      title: "Backend & API",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiFastapi />, name: "FastAPI" },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { icon: <GiArtificialIntelligence />, name: "AI / NLP" },
        { icon: <SiChainlink />, name: "LangChain" },
        { icon: <BsDatabase />, name: "Vector DB (Chroma)" },
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: [
        { icon: <FaGithub />, name: "Github" },
        { icon: <FaFigma />, name: "Figma" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5 text-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">
          <span className="accent">My</span> Skills
        </h2>

        {categories.map((category, i) => (
          <div key={i} className="mb-5">
            <h4 className="fw-bold mb-4 category-title">{category.title}</h4>
            <div className="row justify-content-center g-4">
              {category.skills.map((skill, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="skill-card p-4 rounded-4">
                    <div className="skill-icon">{skill.icon}</div>
                    <p className="mt-3">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
