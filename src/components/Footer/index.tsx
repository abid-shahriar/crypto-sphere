import React from 'react';
import styled from 'styled-components';

export default function index() {
  return <FooterContainer>footer</FooterContainer>;
}

const FooterContainer = styled.footer`
  height: var(--footer-height);
  background-color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
`;
