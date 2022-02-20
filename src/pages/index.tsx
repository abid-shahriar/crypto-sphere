import axios from 'axios';

import HomePage from '../pageComponents/Home';

export default function Home(props: any) {
  return <HomePage firstTenCoinData={props.firstTenCoinData.data} />;
}

export async function getStaticProps() {
  const res = await axios.get(`https://coinranking1.p.rapidapi.com/coins`, {
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'c30317cbdcmsh12064b4c7672dbep17c564jsn830ca0b7c38b'
    },
    params: {
      limit: 10
    }
  });

  return {
    props: { firstTenCoinData: res.data },
    revalidate: 60
  };
}
