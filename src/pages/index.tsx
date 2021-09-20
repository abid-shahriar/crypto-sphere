import HomePage from '../pageComponents/Home';

import { firstTenCoinData } from '../pageComponents/Home/static';

export default function Home(props: any) {
  return <HomePage firstTenCoinData={props?.firstTenCoinData} />;
}

export async function getStaticProps() {
  // const res = await fetchCoinsApi(10);

  return {
    // props: { firstTenCoinData: res.data }
    props: { firstTenCoinData: firstTenCoinData.data }
  };
}
