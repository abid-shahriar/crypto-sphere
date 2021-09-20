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
    if (coins && coins.coinsData && coins.coinsData.data && coins.coinsData.data.stats && coins.coinsData.data.coins) {
      setTimeout(() => {
        setCoinData({
          ...coinsData,
          data: {
            ...coinsData.data,
            stats: coins.coinsData.data.stats,
            coins: coins.coinsData.data.coins
          }
        });
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coins]);

  return (
    <div>
      <GlobalCryptoStats stats={coinsData?.data?.stats} />
      <TopTenCurrencies coins={coinsData?.data?.coins} />
    </div>
  );
}
