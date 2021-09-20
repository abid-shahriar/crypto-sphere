import styled from 'styled-components';
import millify from 'millify';

import { Typography } from '../../../components';
import { hexToRgb } from '../utils/functions';

export default function Stats({ coinData }: any) {
  return (
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
  );
}

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
