import React from 'react';
import './Servics.css';
import servicosData from './servics.json';

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

const Servicos: React.FC = () => {
  return (
    <div className="servicos-container">
        <h1 className='name'>Serviços</h1>
      {servicosData.map((servico: Servico) => (
        <div className="servico-card" key={servico.id}>
          <img src={servico.imagem} alt={servico.titulo} className="servico-imagem" />
          <h3 className="servico-titulo">{servico.titulo}</h3>
          <p className="servico-descricao">{servico.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default Servicos;