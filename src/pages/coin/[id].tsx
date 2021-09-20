import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../../components';

import { fetchSingleCoinApi } from '../../redux/apis/coins';

const hexToRgb = (hex: any) => {
  const rgb = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m: any, r: any, g: any, b: any) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map((x: any) => parseInt(x, 16));

  return rgb;
};

export default function CoinDetailsPage() {
  const [coinData, setCoinData] = useState<any>(undefined);
  const router = useRouter();

  const coinId = router.query.id;

  useEffect(() => {
    if (coinId && !coinData) {
      fetchSingleCoinApi(+coinId).then((res) => {
        setCoinData(res.data.data.coin);
      });
    }
  }, [coinId]);

  console.log(coinData);

  if (!coinData) {
    return null;
  }

  return (
    <Container>
      <LogoContainer>
        <Image src={coinData?.iconUrl} alt={coinData?.name} />
      </LogoContainer>
      <Typography textAlign='center' variant='title' textTransform='uppercase' margin='0 0 4rem 0'>
        {coinData?.name}({coinData?.symbol})
      </Typography>

      {/* <TwoColumn></TwoColumn> */}

      <StatsContainer>
        <StatsCard color={coinData.color}>
          <Typography fontWeight='400' fontSize='2rem' textTransform='capitalize'>
            Current Price (USD)
          </Typography>
          <Typography fontWeight='500' fontSize='2.5rem'>
            {millify(coinData.price)}
          </Typography>
        </StatsCard>
        <StatsCard color={coinData.color}>
          <Typography fontWeight='400' fontSize='2rem' textTransform='capitalize'>
            change rate
          </Typography>
          <Typography fontWeight='500' fontSize='2.5rem'>
            {millify(coinData.change)}%
          </Typography>
        </StatsCard>
        <StatsCard color={coinData.color}>
          <Typography fontWeight='400' fontSize='2rem' textTransform='capitalize'>
            number Of Exchanges
          </Typography>
          <Typography fontWeight='500' fontSize='2.5rem'>
            {millify(coinData.numberOfExchanges)}
          </Typography>
        </StatsCard>
        <StatsCard color={coinData.color}>
          <Typography fontWeight='400' fontSize='2rem' textTransform='capitalize'>
            number Of Markets
          </Typography>
          <Typography fontWeight='500' fontSize='2.5rem'>
            {millify(coinData.numberOfMarkets)}
          </Typography>
        </StatsCard>
      </StatsContainer>

      <Description>{HTMLReactParser(coinData?.description)}</Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Description = styled.div`
  font-size: 1.8rem;
  font-family: var(--font-primary);
  color: black;
  width: 90%;
  margin: 0 auto;

  a {
    color: var(--clr-blue);
  }

  h3 {
    margin-top: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
`;

const StatsCard = styled.div<any>`
  width: 300px;
  border-radius: 5px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color ? `rgba(${hexToRgb(color)[0]}, ${hexToRgb(color)[1]}, ${hexToRgb(color)[2]}, .4 )` : 'white')};
`;
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
