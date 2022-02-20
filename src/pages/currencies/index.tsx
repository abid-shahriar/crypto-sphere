import axios from 'axios';
import CurrenciesPage from '../../pageComponents/Currencies';

export default function Home({ coinsData }: any) {
  return <CurrenciesPage coinsData={coinsData} />;
}

export async function getStaticProps() {
  const res = await axios.get(`https://coinranking1.p.rapidapi.com/coins`, {
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'c30317cbdcmsh12064b4c7672dbep17c564jsn830ca0b7c38b'
    },
    params: {
      limit: 100
    }
  });

  return {
    props: { coinsData: res.data.data.coins },
    revalidate: 60
  };
}
