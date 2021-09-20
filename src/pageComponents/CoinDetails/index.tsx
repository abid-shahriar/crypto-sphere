import HTMLReactParser from 'html-react-parser';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../../components';

import { fetchCoinHistoryApi, fetchSingleCoinApi } from '../../redux/apis/coins';
import HistoryChart from './components/HistoryChart';
import RelatedLinks from './components/RelatedLinks';
import Stats from './components/Stats';

export default function CoinDetailsPage({ coinId }: any) {
  const [coinData, setCoinData] = useState<any>(undefined);
  const [coinHistory, setCoinHistory] = useState<any>(undefined);

  useEffect(() => {
    if (coinId && !coinData) {
      fetchSingleCoinApi(+coinId).then((res) => {
        setCoinData(res.data.data.coin);
      });
    }
    if (coinId && !coinHistory) {
      fetchCoinHistoryApi(+coinId).then((res) => {
        setCoinHistory(res.data.data.history);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinId]);

  if (!coinData) {
    return <Typography>loading...</Typography>;
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
      <HistoryChart coinHistory={coinHistory} />

      <Description>{HTMLReactParser(coinData?.description)}</Description>

      <RelatedLinks links={coinData.links} />
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
