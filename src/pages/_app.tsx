import type { AppProps } from 'next/app';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducers from '../redux/rootReducer';
import RootLayout from '../layouts/RootLayout';

import '../styles/main.scss';

const store = createStore(rootReducers, {}, applyMiddleware(thunk));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
export default MyApp;
