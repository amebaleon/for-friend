
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Button } from 'react-bootstrap';

const Nav = styled(motion.nav)`
  background: transparent;
  padding: 20px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
`;

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled(Button)`
  background: transparent;
  border-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const NavigationBar = ({ toggleSidebar }) => {
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <MenuButton variant="outline-primary" onClick={toggleSidebar}>
          Menu
        </MenuButton>
        <motion.div whileHover={{ scale: 1.1 }}>
            <a href="/" style={{ fontFamily: 'Poppins', fontSize: '1.5rem', color: '#6C63FF', textDecoration: 'none'}}>Travel Co.</a>
        </motion.div>
      </NavContainer>
    </Nav>
  );
};

export default NavigationBar;
