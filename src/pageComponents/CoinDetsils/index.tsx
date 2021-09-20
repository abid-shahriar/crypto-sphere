import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../../components';

import { fetchSingleCoinApi } from '../../redux/apis/coins';
import Stats from './components/Stats';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <Stats coinData={coinData} />

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
