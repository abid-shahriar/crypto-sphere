import GlobalCryptoStats from './components/GlobalCryptoStats';
import TopTenCurrencies from './components/TopTenCurrencies';

export default function HomePage({ firstTenCoinData }: any) {
  const {
    data: { data: coins }
  } = firstTenCoinData;

  return (
    <div>
      <GlobalCryptoStats stats={coins.stats} />
      <TopTenCurrencies coins={coins.coins} />
    </div>
  );
}
