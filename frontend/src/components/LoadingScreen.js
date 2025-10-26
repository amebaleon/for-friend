
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 10px solid ${props => props.theme.colors.secondary};
  border-top: 10px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.h2`
  margin-top: 20px;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.primary};
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen;
