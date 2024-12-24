import React, { useState } from "react";
import "./css/Skills.css";
import Kangmin from "../../img/KakaoTalk_Photo_2024-12-16-20-31-10 018.jpeg";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState("");

  // 데이터 분리
  const languages = [
    { name: "C", logo: Kangmin },
    { name: "C++", logo: Kangmin },
    { name: "C#", logo: Kangmin },
    { name: "Java", logo: Kangmin },
    { name: "JavaScript", logo: Kangmin },
  ];

  const frameworks = [
    { name: "Unity", logo: Kangmin },
    { name: "Vue.js", logo: Kangmin },
    { name: "React.js", logo: Kangmin },
    { name: "SpringBoot", logo: Kangmin },
  ];

  const programs = [
    { name: "IntelliJ", logo: Kangmin },
    { name: "VSCode", logo: Kangmin },
    { name: "Figma", logo: Kangmin },
    { name: "PhotoShop", logo: Kangmin },
    { name: "Aesprite", logo: Kangmin },
  ];

  // 재사용 가능한 UI 컴포넌트
  const renderSkillSection = (title, skills) => (
    <div className="skills-category">
      <h3>{title}</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill("")}
          >
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <div className={`skill-name ${hoveredSkill === skill.name ? "show" : ""}`}>
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      {renderSkillSection("Languages", languages)}
      {renderSkillSection("Frameworks", frameworks)}
      {renderSkillSection("Programs", programs)}
    </section>
  );
};

export default Skills;
