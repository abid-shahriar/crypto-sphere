import { CoinsCard, Typography } from '../../../components';

export default function TopTenCurrencies({ coins }: any) {
  return (
    <>
      <Typography variant='title' margin='4rem 0 1rem 0'>
        Top 10 Cryptocurrencies in the world:
      </Typography>

      <CoinsCard coinsData={coins} />
    </>
  );
}
