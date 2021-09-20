import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../../redux/actions/coins';
import GlobalCryptoStats from './components/GlobalCryptoStats';
import TopTenCurrencies from './components/TopTenCurrencies';

export default function HomePage({ firstTenCoinData }: any) {
  const dispatch = useDispatch();
  const [coinsData, setCoinData] = useState(firstTenCoinData);

  const { coins } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchCoins(10));
  }, [dispatch]);

  useEffect(() => {
    if (coins && coins.coinsData) {
      setCoinData(coins.coinsData);
    }
  }, [coins]);

  return (
    <div>
      <GlobalCryptoStats stats={coinsData?.data?.stats} />
      <TopTenCurrencies coins={coinsData?.data?.coins} />
    </div>
  );
}
