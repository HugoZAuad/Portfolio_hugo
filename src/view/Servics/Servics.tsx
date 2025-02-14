import React from "react";
import "./Servics.scss";
import servicosData from "./servics.json";

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

const Servicos: React.FC = () => {
  return (
    <div>
      <h1 className="name">MINHAS HABILIDADES</h1>
      <div className="servicos-container">
        {servicosData.map((servico: Servico) => (
          <div className="servico-card" key={servico.id}>
            <img
              src={servico.imagem}
              alt={servico.titulo}
              className="servico-imagem"
            />
            <h3 className="servico-titulo">{servico.titulo}</h3>
            <p className="servico-descricao">{servico.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
