
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import HomeScreen from './components/HomeScreen';
import LoginForm from './components/LoginForm';
import LoadingScreen from './components/LoadingScreen';
import NavigationBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';
import FakeGoogleLogin from './components/FakeGoogleLogin';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;


const MainContent = styled.div`
  margin-left: ${props => (props.isOpen ? '250px' : '0')};
  transition: margin-left 0.5s;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <NavigationBar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <MainContent isOpen={isOpen}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/loading" element={<LoadingScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/google-login" element={<FakeGoogleLogin />} />
          </Routes>
        </MainContent>
      </Router>
    </ThemeProvider>
  );
}

export default App;
