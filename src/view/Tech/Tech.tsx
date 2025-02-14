"use client";

import React, { useEffect, useState } from "react";
import styles from "./Tech.module.scss";
import Carrosel from "../../components/Carrosel/Carrosel";

const Technologies: React.FC = () => {
  const techs = [
    {
      name: "HTML",
      description:
        "HTML (HyperText Markup Language) é a linguagem padrão para criar páginas da web.",
    },
    {
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) é usada para descrever a apresentação do HTML.",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript é uma linguagem que permite a criação de interatividade em páginas da web.",
    },
    {
      name: "React",
      description:
        "React é uma biblioteca de JavaScript para construir interfaces de usuário.",
    },
    {
      name: "Bootstrap",
      description:
        "Bootstrap é um framework front-end que facilita o desenvolvimento de sites responsivos.",
    },
    {
      name: "Node.js",
      description:
        "Node.js é um ambiente de execução JavaScript do lado do servidor.",
    },
    {
      name: "TypeScript",
      description:
        "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática à linguagem.",
    },
    {
      name: "Tailwind CSS",
      description:
        "Tailwind CSS é um framework CSS  que permite a construção de interfaces personalizadas.",
    },
    {
      name: "Styled Components",
      description:
        "Styled Components é uma biblioteca para React que permite escrever CSS dentro do JavaScript.",
    },
  ];

  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % techs.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [techs.length]);

  return (
    <div className={styles.container}>
      <div>
        <Carrosel />
      </div>
      <h1>Tecnologias que trabalho</h1>
      <div className={styles.techWrapper}>
        <ul className={styles.techList}>
          {techs.map((tech, index) => (
            <li
              key={index}
              className={styles.techItem}
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.techDescription}>
        {techs[currentTechIndex].description}
      </div>
    </div>
  );
};

export default Technologies;