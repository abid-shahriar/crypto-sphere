import * as t from '../types';
import * as api from '../apis/coins';

export const fetchCoins = (limit: number) => async (dispatch: any) => {
  dispatch({ type: t.FETCH_COINS_FAILED, payload: {} });

  try {
    const res = await api.fetchCoinsApi(limit);

    dispatch({ type: t.FETCH_COINS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: t.FETCH_COINS_FAILED, payload: error });
  }
};
