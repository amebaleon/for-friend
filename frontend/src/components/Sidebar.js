
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 40px 20px;
  z-index: 1000;
  font-family: ${props => props.theme.fonts.primary};
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 1.2rem;
  margin: 20px 0;
  display: block;
  transition: all 0.2s ease-in-out;

  &:hover {
    padding-left: 10px;
  }
`;

const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
      <h3>Menu</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleSidebar}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleSidebar}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
