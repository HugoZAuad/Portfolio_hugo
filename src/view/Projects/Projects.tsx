import React, { useState } from "react";
import data from "./Projects.json";
import "./Projects.css";

const CardFlip: React.FC = () => {
  return (
    <div className="projects-section">
      <h1>PROJETOS</h1>
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
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