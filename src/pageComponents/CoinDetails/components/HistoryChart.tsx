import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Typography } from '../../../components';

export default function HistoryChart({ coinHistory }: any) {
  const coinsPrice = [];
  const coinsTimestamp = [];

  for (let i = 0; i < coinHistory?.length; i++) {
    coinsPrice.push(coinHistory[i].price);
    coinsTimestamp.push(new Date(coinHistory[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinsTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinsPrice,
        fill: false,
        backgroundColor: '#002fff',
        borderColor: '#0096ff'
      }
    ]
  };

  //   const options = {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }
  //       ]
  //     }
  //   };

  return (
    <Container>
      <Typography variant='title' margin='4rem 0 0 0' fontSize='2.4rem' fontWeight='600'>
        History of last 7 Days:
      </Typography>

      <ChartContainer>
        {/* <Line options={options} data={data} /> */}
        <Line data={data} />
      </ChartContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const ChartContainer = styled.div`
  margin-bottom: 4rem;

  canvas {
    /* height: 700px !important; */
  }
`;
