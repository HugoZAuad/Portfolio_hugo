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
  const cardsToShow = 2; // Número de cards a serem exibidos

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - cardsToShow + data.length) % data.length);
  };

  const currentProjects = data.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="projects-section">
      <h1>PROJETOS</h1>
      <h4>Use as setas para navegar</h4>
      <div className="card-container">
        <button className="arrow left" onClick={handlePrev}>&lt;</button>
        {currentProjects.map((project) => (
          <Card key={project.id} item={project} />
        ))}
        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default CardFlip;