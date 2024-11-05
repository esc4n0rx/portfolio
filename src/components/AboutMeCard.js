// src/components/AboutMeCard.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 700px;
  color: #d4d4d4;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Header = styled.div`
  background-color: #333;
  color: #d4d4d4;
  padding: 5px 15px;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const LineNumber = styled.span`
  color: #5e5e5e;
  margin-right: 10px;
`;

const CodeLine = styled.div`
  display: flex;
  align-items: center;
`;

const TextArea = styled.textarea`
  background-color: transparent;
  color: inherit;
  border: none;
  outline: none;
  resize: none;
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
  min-height: 200px;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-left: 20px;
  overflow: auto;
`;

const AboutMeCard = () => {
  const originalText = `
  const aboutMe = {
    name: 'Paulo Oliveira',
    profession: 'Desenvolvedor Web',
    technologies: [ 'React', 'Node.js', 'SQL', 'Next.js','Python','Visual Basic'],
  }`;

  const [text, setText] = useState(originalText);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing) {
      const timer = setTimeout(() => {
        setText(originalText);
        setIsEditing(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [isEditing]);

  return (
    <Card>
      <Header>
        <span>aboutMe.js</span>
        <div>
          <span style={{ color: "#ff5f57" }}>●</span>
          <span style={{ color: "#ffbd2e", margin: "0 5px" }}>●</span>
          <span style={{ color: "#28c93f" }}>●</span>
        </div>
      </Header>
      <CodeLine>
        <LineNumber>1</LineNumber>
        <TextArea
          value={text}
          onChange={handleTextChange}
          spellCheck="false"
        />
      </CodeLine>
    </Card>
  );
};

export default AboutMeCard;
