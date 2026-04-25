import React from "react";
import "./Skills.scss";
import GridOverlay from "../../components/GridOverlay/GridOverlay";

const skills = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "Express.js",
    category: "backend",
    icon: "https://cdn.simpleicons.org/express/white",
  },
  {
    id: 5,
    name: "MongoDB",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "Python",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: 8,
    name: "Redux",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 9,
    name: "Bash",
    category: "tooling",
    icon: "https://cdn.simpleicons.org/gnubash/white",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <GridOverlay />

      <div className="skills__container">
        {/* Header Section */}
        <div className="skills__header">
          <span className="skills__label">.stack</span>
          <div className="skills__header-line" />
        </div>

        {/* Skills Grid */}
        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skills__item" key={skill.id}>
              <div className="skills__icon-wrapper">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="skills__icon"
                />
              </div>
              <div className="skills__info">
                <span className="skills__name">{skill.name}</span>
                <span className="skills__category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
