"use client";

import React, { useEffect, useState } from 'react';
import './Carrosel.css';

const images = [
  '../../assets/Icons/html5-brands-solid.svg',
  '../../assets/Icons/css3-alt-brands-solid.svg',
  '../../assets/Icons/js-brands-solid.svg',
  '../../assets/Icons/react-brands-solid.svg',
  '../../assets/Icons/bootstrap-brands-solid.svg',
  '../../assets/Icons/node-js-brands-solid.svg',
  '../../assets/Icons/ts-brands-solid.svg',
  '../../assets/Icons/tailwind-svgrepo-com.svg',
  '../../assets/Icons/file-code-solid.svg',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        className="carousel-image"
      />
    </div>
  );
};

export default Carousel;