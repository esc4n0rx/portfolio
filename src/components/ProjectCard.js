import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1e1e1e;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  color: #d4d4d4;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Header = styled.div`
  background-color: #333;
  color: #d4d4d4;
  padding: 5px 10px;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CodeLine = styled.div`
  margin: 10px 0;
  display: block;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Header>
        <span>{project.title}.js</span>
        <div>
          <span style={{ color: "#ff5f57" }}>●</span>
          <span style={{ color: "#ffbd2e", margin: "0 5px" }}>●</span>
          <span style={{ color: "#28c93f" }}>●</span>
        </div>
      </Header>
      <CodeLine>
        <span>{`const ${project.title.replace(" ", "")} = {`}</span>
      </CodeLine>
      <CodeLine>
        <span style={{ marginLeft: '20px' }}>{`name: '${project.title}',`}</span>
      </CodeLine>
      <CodeLine>
        <span style={{ marginLeft: '20px' }}>{`description: '${project.description}',`}</span>
      </CodeLine>
      <CodeLine>
        <span style={{ marginLeft: '20px' }}>{`technologies: ${JSON.stringify(project.technologies)},`}</span>
      </CodeLine>
      <CodeLine>
        <span>{`}`}</span>
      </CodeLine>
    </Card>
  );
};

export default ProjectCard;
