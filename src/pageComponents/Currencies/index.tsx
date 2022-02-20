import { useState } from 'react';

import styled from 'styled-components';

import { CoinsCard } from '../../components';

export default function CurrenciesPage({ coinsData }: any) {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <SearchField>
        <input type='text' placeholder='search with coin name...' value={filter} onChange={(e) => setFilter(e.target.value)} />
      </SearchField>
      <CoinsCard coinsData={coinsData} filter={filter} />
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
