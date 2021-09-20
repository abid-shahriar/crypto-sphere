import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { CoinsCard, Typography } from '../../components';
import { fetchCoins } from '../../redux/actions/coins';

export default function CurrenciesPage({ coinsData }: any) {
  const [allCoinsData, setAllCoinsData] = useState(coinsData);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const { coins } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchCoins(100));
  }, [dispatch]);

  useEffect(() => {
    if (coins && coins.coinsData) {
      setAllCoinsData(coins.coinsData);
    }
  }, [coins]);

  if (!allCoinsData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <SearchField>
        <input type='text' placeholder='search with coin name...' value={filter} onChange={(e) => setFilter(e.target.value)} />
      </SearchField>
      <CoinsCard coinsData={allCoinsData?.data?.coins} filter={filter} />
    </div>
  );
}

const SearchField = styled.div`
  max-width: 600px;
  min-width: 300px;
  margin: 4rem auto;

  input {
    width: 100%;
    padding: 1rem;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 1.7rem;

    &::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
