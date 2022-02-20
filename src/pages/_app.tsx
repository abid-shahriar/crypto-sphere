import type { AppProps } from 'next/app';

import RootLayout from '../layouts/RootLayout';

import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
export default MyApp;
