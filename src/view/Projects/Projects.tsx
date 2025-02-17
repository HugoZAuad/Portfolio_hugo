import React, { useState } from "react";
import data from "./Projects.json";
import "./Projects.scss";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<{ item: ProjectItem }> = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-front">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <h5 className="Clique">Clique aqui para ver os detalhes</h5>
      </div>
      <div className="card-back">
        <p>{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          Repositório do projeto
        </a>
      </div>
    </div>
  );
};

const CardFlip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const displayedCards = data.slice(currentIndex, currentIndex + cardsToShow).concat(
    data.slice(0, Math.max(0, currentIndex + cardsToShow - data.length))
  );

  return (
    <div className="projects-section">
      <h1>PROJETOS</h1>
      <div className="card-container">
        <button className="arrow left" onClick={handlePrev}>&lt;</button>
        {displayedCards.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default CardFlip;
