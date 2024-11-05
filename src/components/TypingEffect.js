// src/components/TypingEffect.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold; /* Negrito */
  color: #ffffff; /* Branco */
`;

const TypingText = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #ffffff; /* Branco */
  font-weight: bold; /* Negrito */
`;

const TypingEffect = () => {
  return (
    <Wrapper>
      <Name>Olá, eu sou Paulo Oliveira</Name>
      <TypingText>
        <TypeAnimation
          sequence={[
            'Primeiro,',
            2000,
            'resolva o problema.',
            2000,
            'Depois, escreva o código.',
            2000,
          ]}
          wrapper="p"
          repeat={Infinity}
        />
      </TypingText>
    </Wrapper>
  );
};

export default TypingEffect;
