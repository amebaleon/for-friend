
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>You can contact us at contact@travelco.com</p>
    </ContactContainer>
  );
};

export default Contact;
