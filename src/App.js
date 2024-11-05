// src/App.js
import React from 'react';
import TypingEffect from './components/TypingEffect';
import BackgroundEffect from './components/BackgroundEffect';
import AboutMeCard from './components/AboutMeCard';
import ProjectCard from './components/ProjectCard';
import './App.css';
import styled from 'styled-components';

const projects = [
  {
    title: 'Amb Player',
    description: 'Player de vídeo em React com efeito de ambilight em tempo real.',
    technologies: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Cocômetro',
    description: 'Calculadora humorística que estima ganhos durante pausas para o banheiro no trabalho.',
    technologies: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Escolha Certa',
    description: 'Aplicação em React e Python que usa IA para recomendar filmes e séries com base no estado emocional e preferências do usuário.',
    technologies: ['React', 'Python', 'Machine Learning']
  },
  {
    title: 'Colheita Certa',
    description: 'Aplicação em Python com Flask e MySQL para separação em tempo real de mercadorias na logística.',
    technologies: ['Python', 'Flask', 'MySQL']
  },
  // Adicione mais projetos aqui se necessário
];

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
  }
`;

function App() {
  return (
    <div className="App">
      <BackgroundEffect />
      <header className="App-header">
        <TypingEffect />
      </header>
      <AboutMeCard />
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectGrid>
    </div>
  );
}

export default App;
