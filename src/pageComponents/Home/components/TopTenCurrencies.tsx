import millify from 'millify';
import styled from 'styled-components';
import { Typography } from '../../../components';

export default function TopTenCurrencies({ coins }: any) {
  console.log(coins);
  return (
    <>
      <Typography variant='title' margin='4rem 0 1rem 0'>
        Top 10 Cryptocurrencies in the world:
      </Typography>

      <CoinsCardContainer>
        {coins?.map((coin: any, idx: number) => (
          <CoinCard key={idx}>
            <Header>
              <Typography fontWeight='500' fontSize='2rem'>
                {coin.rank}. {coin.name}
              </Typography>
              <Image src={coin.iconUrl} alt={coin.name} />
            </Header>
            <CoinInfoCard>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                current price: {millify(coin.price)}$
              </Typography>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                Market Cap: {millify(coin.marketCap)}
              </Typography>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                number Of Exchanges: {millify(coin.numberOfExchanges)}
              </Typography>
              <Typography fontWeight='400' fontSize='1.6rem' textTransform='capitalize'>
                number Of Markets: {millify(coin.numberOfMarkets)}
              </Typography>
            </CoinInfoCard>
          </CoinCard>
        ))}
      </CoinsCardContainer>
    </>
  );
}

const CoinCard = styled.div`
  width: 300px;
  border-radius: 5px;
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
  max-width: 40px;
  max-height: 40px;
`;
