import React, { useState } from "react";
import data from "./Projects.json";
import "./Projects.scss";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  siteLink?: string;
}

const Card: React.FC<{ item: ProjectItem }> = ({ item }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="info-container">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="links">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            Repositório
          </a>
          {item.siteLink && (
            <a href={item.siteLink} target="_blank" rel="noopener noreferrer">
              Visitar Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const CardFlip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentProject = data[currentIndex];

  return (
    <div className="projects-section">
      <h1>PROJETOS</h1>
      <h4>Use as setas para navegar</h4>
      <div className="card-container">
        <button className="arrow left" onClick={handlePrev}>&lt;</button>
        <Card key={currentProject.id} item={currentProject} />
        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default CardFlip;
