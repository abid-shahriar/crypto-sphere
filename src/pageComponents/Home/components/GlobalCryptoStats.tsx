import millify from 'millify';
import styled from 'styled-components';
import { Typography } from '../../../components';

export default function GlobalCryptoStats({ stats }: any) {
  return (
    <>
      <Typography variant='title' margin='0 0 1rem 0'>
        Global Crypto Stats:
      </Typography>

      <StatsCardsWrapper>
        <StatsCard>
          <Typography fontWeight='500'>Total Cryptocurrencies</Typography>
          <Typography fontWeight='600' fontSize='2.8rem' margin='1rem 0 0 0'>
            {millify(stats?.total)}
          </Typography>
        </StatsCard>
        <StatsCard>
          <Typography fontWeight='500'>Total 24H Volume</Typography>
          <Typography fontWeight='600' fontSize='2.8rem' margin='1rem 0 0 0'>
            {millify(stats?.total24hVolume)}
          </Typography>
        </StatsCard>
        <StatsCard>
          <Typography fontWeight='500'>Total Exchanges</Typography>
          <Typography fontWeight='600' fontSize='2.8rem' margin='1rem 0 0 0'>
            {millify(stats?.totalExchanges)}
          </Typography>
        </StatsCard>
        <StatsCard>
          <Typography fontWeight='500'>Total Market Cap</Typography>
          <Typography fontWeight='600' fontSize='2.8rem' margin='1rem 0 0 0'>
            {millify(stats?.totalMarketCap)}
          </Typography>
        </StatsCard>
        <StatsCard>
          <Typography fontWeight='500'>Total Markets</Typography>
          <Typography fontWeight='600' fontSize='2.8rem' margin='1rem 0 0 0'>
            {millify(stats?.totalMarkets)}
          </Typography>
        </StatsCard>
      </StatsCardsWrapper>
    </>
  );
}

const StatsCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StatsCard = styled.div`
  padding: 1rem 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 2rem;

  @supports (gap: 2rem) {
    margin: 0;
  }

  &:nth-child(1) {
    background-color: rgb(150, 216, 150);
  }
  &:nth-child(2) {
    background-color: rgb(146, 211, 219);
  }
  &:nth-child(3) {
    background-color: rgb(166, 166, 223);
  }
  &:nth-child(4) {
    background-color: rgb(243, 191, 243);
  }
  &:nth-child(5) {
    background-color: rgb(250, 152, 152);
  }
`;
