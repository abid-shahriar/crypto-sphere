import * as t from '../types';

interface coinsReducersProps {
  type: string;
  payload: any;
}

const initialState = {
  coinsData: {},
  isLoading: false,
  error: {}
};

function coinsReducers(state = initialState, { type, payload }: coinsReducersProps) {
  switch (type) {
    case t.FETCH_COINS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.FETCH_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coinsData: payload.data
      };
    case t.FETCH_COINS_FAILED:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
}

export default coinsReducers;
