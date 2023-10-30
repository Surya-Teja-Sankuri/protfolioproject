import React from "react";
import techstacks from "../data/techstacks";
import "../css/techskills.css";

function TechStack() {
  const Techs = techstacks.map((skill) => (
    <div key={skill.id} className="tech-skill">
      <img className="tech-skill-logo" src={skill.image} alt={skill.name} />
    </div>
  ));

  return (
    <div>
      <h2 className="tech-title">Tech Stack</h2>
      <div className="tech-skills">{Techs}</div>
    </div>
  );
}

export default TechStack;
