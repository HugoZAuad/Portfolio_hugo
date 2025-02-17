"use client";

import React, { useEffect, useState } from "react";
import "./Home.scss";
import Tech from "../../components/Tech/Tech"

const Home: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <main className="home-main">
        <IntroSection showText={showText} />
      </main>
    </>
  );
};

const IntroSection: React.FC<{ showText: boolean }> = ({ showText }) => (
  <section className="intro">
    <div>
      <h1 className="welcome-text">Bem vindo (a)! Eu sou </h1>
      {showText && <h1 className="pulse-animation">Hugo Zeymer Auad</h1>}
      <br />
      <ProfessionalJourney />
    </div>
  </section>
);

const ProfessionalJourney: React.FC = () => (
  <>
    <p>
      Minha trajetória profissional começou como aprendiz na Sococo S/A
      Indústrias Alimentícias, onde desenvolvi habilidades em
      administração de pessoal e atendimento ao cliente. Em seguida,
      trabalhei como Auxiliar Administrativo na Transmares Corretora &
      Certificação Digital, gerenciando processos de seguros. Alguns anos
      depois, na Katoen Natie, liderei o atendimento aos motoristas e a
      validação de documentações. Após isso, atuei na Teleperformance,
      aprimorando minha capacidade de resolver problemas e oferecer
      soluções eficazes no atendimento ao cliente.
    </p>
    <br />
    <p>
      Depois, ingressei na TCIA como Auxiliar de Logística, onde me
      especializei em análises de relatórios em Excel, gestão de
      estoques e criação de dashboards via Power BI, contribuindo para a
      eficiência operacional da empresa. Passei como Analista de
      Atendimento e Implantação na Vivver Sistemas, onde analisei
      atendimentos, simplificava conhecimentos complexos e apoiei nas
      implantações do sistema, sempre buscando melhorar a experiência do
      usuário final. Hoje estou em busca de uma nova recolocação no
      mercado de trabalho, especificamente na área de tecnologia.
      <br />
      <br />
      Estou em um processo de transição de carreira e, para isso, estou
      estudando programação e fazendo a faculdade de Ciências da
      Computação na Gran Faculdade. Meu objetivo é unir minha
      experiência anterior com novas habilidades na área tecnológica,
      buscando oportunidades que me permitam crescer e contribuir em um
      setor em constante evolução.
    </p>
    <Tech />
  </>
);

export default Home;