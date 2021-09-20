import React from 'react';
import styled from 'styled-components';
import { Typography } from '..';

export default function index() {
  return (
    <FooterContainer>
      <Typography fontWeight='500'>CryptoSphere</Typography>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  height: var(--footer-height);
  background-color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
