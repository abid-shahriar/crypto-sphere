import HomePage from '../pageComponents/Home';

import { firstTenCoinData } from '../pageComponents/Home/static';
// import { fetchCoinsApi } from '../redux/apis/coins';

export default function Home(props: any) {
  return <HomePage firstTenCoinData={props?.firstTenCoinData} />;
}

export async function getStaticProps() {
  // const res = await fetchCoinsApi(10);

  return {
    // props: { firstTenCoinData: res.data },
    // revalidate: 86400
    props: { firstTenCoinData: firstTenCoinData.data }
  };
}
