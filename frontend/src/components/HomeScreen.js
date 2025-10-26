
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const StyledButton = styled(motion.button)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.2rem;
  padding: 15px 40px;
  border-radius: 50px;
  border: 2px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  margin: 0 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
  }
`;

const OutlineButton = styled(StyledButton)`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }
`;

const HomeScreen = () => {
  return (
    <HeroSection>
      <Container>
        <Row>
          <Col>
            <Title
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              Your Adventure Awaits
            </Title>
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover the world's most breathtaking destinations.
            </Subtitle>
            <div>
              <Link to={{ pathname: "/login", search: "?button=login" }}>
                <StyledButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </StyledButton>
              </Link>
              <Link to={{ pathname: "/login", search: "?button=signup" }}>
                <OutlineButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </OutlineButton>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default HomeScreen;
