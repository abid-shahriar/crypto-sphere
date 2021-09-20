import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../components';

export default function RelatedLinks({ links }: any) {
  console.log(links);
  return (
    <Container>
      <InnerContainer>
        <Typography variant='title' fontSize='2.4rem' fontWeight='600' margin='0 0 2rem 0'>
          Related Links:
        </Typography>

        <LinkCardsContainer>
          {links.map((link: any, idx: number) => (
            <LinkCard key={idx} onClick={() => window.open(link.url)}>
              <Typography fontWeight='400'>{link.type}</Typography>
              <Typography fontWeight='400'>{link.name}</Typography>
            </LinkCard>
          ))}
        </LinkCardsContainer>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  background-color: rgba(150, 150, 150, 0.1);
  border-radius: 5px;
  padding: 4rem 0;
`;
const InnerContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const LinkCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--clr-blue);
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 150ms;

  :hover {
    background-color: #a2d5df;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > * {
    pointer-events: none;
  }
`;
const LinkCardsContainer = styled.div``;
