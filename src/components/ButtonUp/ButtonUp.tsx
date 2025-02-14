"use client";

import React from 'react';
import './ButtonUp.scss';


const ButtonUp: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="button-up" onClick={scrollToTop}>

    </button>
  );
};

export default ButtonUp;