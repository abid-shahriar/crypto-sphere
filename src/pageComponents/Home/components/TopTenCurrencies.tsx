import styled from 'styled-components';
import Link from 'next/link';

import { CoinsCard, Typography } from '../../../components';

export default function TopTenCurrencies({ coins }: any) {
  return (
    <>
      <Typography variant='title' margin='4rem 0 2rem 0' fontSize='2.4rem' fontWeight='600'>
        Top 10 Crypto in the world:
      </Typography>

      <CoinsCard coinsData={coins} />

      <Link href='/currencies' passHref>
        <SeeMoreBtn>
          <Typography textAlign='center' fontWeight='400' color='white'>
            Show More
          </Typography>
        </SeeMoreBtn>
      </Link>
    </>
  );
}

const SeeMoreBtn = styled('a')`
  margin-top: 2rem;
  width: 100%;
  background-color: var(--clr-blue);
  outline: 0;
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  border-radius: 5px;
  transition: 150ms;

  &:hover {
    background-color: #0288e7;
  }
`;
