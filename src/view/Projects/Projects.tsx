import React, { useState } from "react";
import data from "./Projects.json";
import "./Projects.scss";

const CardFlip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5; // Número de cards a serem exibidos

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  // Calcula os índices dos cards a serem exibidos
  const displayedCards = data.slice(currentIndex, currentIndex + cardsToShow).concat(
    data.slice(0, Math.max(0, currentIndex + cardsToShow - data.length))
  );

  return (
    <div className="projects-section">
      <h1>PROJETOS</h1>
      <div className="card-container">
        <button className="arrow left" onClick={handlePrev}>{"<"}</button>
        {displayedCards.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        <button className="arrow right" onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
};

const Card: React.FC<{ item: { title: string; description: string; image: string; link: string } }> = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-front">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
      </div>
      <div className="card-back">
        <p>{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
      </div>
    </div>
  );
};

export default CardFlip;