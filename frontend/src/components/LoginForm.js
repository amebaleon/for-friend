import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.white};
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.secondary};
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: ${props => props.theme.fonts.primary};
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const GoogleButton = styled(Button)`
    background: #4285F4;
    &:hover {
        background: #3578E5;
    }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const buttonClicked = searchParams.get('button') || 'unknown';
    setButton(buttonClicked);
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/loading');
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, button }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGoogleLogin = () => {
    navigate('/google-login', { state: { button } });
  }

  return (
    <FormContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Form onSubmit={handleSubmit}>
        <Title>{button === 'login' ? 'Login' : 'Sign Up'}</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">{button === 'login' ? 'Login' : 'Sign Up'}</Button>
        <GoogleButton onClick={handleGoogleLogin}>{button === 'login' ? 'Login with Google' : 'Sign Up with Google'}</GoogleButton>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;