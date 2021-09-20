import CurrenciesPage from '../../pageComponents/Currencies';
import { firstHundredCoinsData } from '../../pageComponents/Currencies/static';
// import { fetchCoinsApi } from '../../redux/apis/coins';

export default function index({ coinsData }: any) {
  return <CurrenciesPage coinsData={coinsData} />;
}

export async function getStaticProps() {
  // const res: any = await fetchCoinsApi(100);

  return {
    // props: { coinsData: res.data },
    // revalidate: 86400
    props: { coinsData: firstHundredCoinsData }
  };
}
