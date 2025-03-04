import React from 'react';
import './Navbar.scss';
import logo from '../../assets/Imgs/logoP.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://github.com/HugoZAuad" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/about">Sobre</a></li>
        <li><a href="/projects">Projetos</a></li>
        <li><a href="/services">Habilidades</a></li>
        <li><a href="/contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;