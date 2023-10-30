import React, { useState } from "react";
import "../css/Card.css";
import ReactCardFlip from "react-card-flip";
import { BiArrowBack } from "react-icons/bi";
import github from "../assets/github.png";
import LinesEllipsis from "react-lines-ellipsis";

function ProjectCard({ image, title, Technologies, description, github_link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card">
        <div className="glassmorphic">
          <img src={image} alt={title} className="card-image" />
          <h2 className="card-title">{title}</h2>
          <ul className="technologies">
            {Technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <LinesEllipsis
            className="description"
            text={description}
            maxLine={3}
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <button className="info-btn" onClick={() => setIsFlipped(!isFlipped)}>
            See more info
          </button>
        </div>
      </div>
      <div className="card">
        <div className="back-card">
          <button
            className="back-arrow-btn"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <BiArrowBack className="back-arrow" />
          </button>
          <br />
          <div>{description}</div>
          <br />
          <a className="github-link" href={github_link} target="_blank">
            <img className="github-img" src={github} />
            <span className="github-text">GitHub Link</span>
          </a>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default ProjectCard;
