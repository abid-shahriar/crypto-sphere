import GlobalCryptoStats from './components/GlobalCryptoStats';
import TopTenCurrencies from './components/TopTenCurrencies';

export default function HomePage({ firstTenCoinData }: any) {
  return (
    <div>
      <GlobalCryptoStats stats={firstTenCoinData.stats} />
      <TopTenCurrencies coins={firstTenCoinData.coins} />
    </div>
  );
}
