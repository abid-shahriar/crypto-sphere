import { useRouter } from 'next/router';

import CoinDetailsPage from '../../pageComponents/CoinDetails';

export default function CoinDetails() {
  const router = useRouter();
  const coinId = router.query.id;

  return <CoinDetailsPage coinId={coinId} />;
}
