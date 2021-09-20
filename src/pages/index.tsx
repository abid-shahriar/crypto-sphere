import HomePage from '../pageComponents/Home';

import { firstTenCoinData } from '../pageComponents/Home/static';

export default function Home(props: any) {
  return <HomePage firstTenCoinData={props.firstTenCoinData} />;
}

export async function getStaticProps() {
  return {
    props: { firstTenCoinData }
  };
}
