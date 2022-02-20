import millify from 'millify';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { Typography } from '..';

export default function CoinsCard({ coinsData, filter = '' }: any) {
  const router = useRouter();

  return (
    <CoinsCardContainer>
      {coinsData
        ?.filter((coin: any) => coin.name.toLowerCase().includes(filter.toLowerCase()))
        .map((coin: any, idx: number) => (
          <CoinCard
            key={idx}
            onClick={() => {
              router.push(`/coin/${coin.uuid}`);
            }}
          >
            <Header>
              <Typography fontWeight='500' fontSize='2rem'>
                {coin.rank}. {coin.name}
              </Typography>
              <Image src={coin.iconUrl} alt={coin.name} />
            </Header>
            <CoinInfoCard>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                current price: ${millify(coin.price)}
              </Typography>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                Market Cap: {millify(coin.marketCap)}
              </Typography>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                24h Volume: {millify(coin['24hVolume'])}
              </Typography>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                Change Rate: {coin.change}%
              </Typography>
            </CoinInfoCard>
          </CoinCard>
        ))}
    </CoinsCardContainer>
  );
}

const CoinCard = styled.div`
  width: 300px;
  border-radius: 5px;
  cursor: pointer;
  transition: 150ms;

  :hover {
    box-shadow: 5px 5px 20px rgba(1, 123, 172, 0.2);
  }

  & > * {
    pointer-events: none;
  }

  @media (max-width: 678px) {
    width: 100%;
  }
`;
const CoinsCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;
const CoinInfoCard = styled.div`
  padding: 1rem;
  background-color: #e7e7e7;
  border-radius: 0 0 5px 5px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e0e0e0;
  padding: 1rem;
  border-radius: 5px 5px 0 0;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`;
