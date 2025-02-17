"use client";

import React, { useEffect, useState } from "react";
import styles from "./Tech.module.scss";
import techsData from "./Tech.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

interface Tech {
  name: string;
  description: string;
  icon: string;
}

const iconMap: { [key: string]: any } = {
  html5: faHtml5,
  css3: faCss3Alt,
  js: faJs,
  react: faReact,
  node: faNodeJs,
  bootstrap: faBootstrap,
};

const Technologies: React.FC = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % techsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTech = techsData[currentTechIndex];

  return (
    <div className={styles.container}>
      <h1>EXPERIENCIA COM </h1>
      <div className={styles.techWrapper}>
      <h2 className={styles.techItem}>{currentTech.name}</h2>
        <FontAwesomeIcon icon={iconMap[currentTech.icon]} size="5x" />
      </div>
      <div className={styles.techDescription}>{currentTech.description}</div>
    </div>
  );
};

export default Technologies;
