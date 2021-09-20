import { combineReducers } from 'redux';

import coinsReducers from './reducers/coins';

const rootReducer = combineReducers({
  coins: coinsReducers
});

export default rootReducer;
