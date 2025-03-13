import { FaReact, FaJs, FaCss3 } from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React", level: "90%" },
  { icon: <FaJs />, name: "JavaScript", level: "85%" },
  { icon: <FaCss3 />, name: "CSS3/SCSS", level: "95%" },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Навыки</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
