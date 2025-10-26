
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <p>We are a travel agency dedicated to providing the best travel experiences.</p>
    </AboutContainer>
  );
};

export default About;
