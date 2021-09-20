import * as t from '../types';
import * as api from '../apis/coins';

export const fetchCoins =
  (limit = 1000) =>
  async (dispatch: any) => {
    dispatch({ type: t.FETCH_COINS_FAILED, payload: {} });

    try {
      const res = await api.fetchCoinsApi(limit);

      const stringifyData = JSON.stringify(res);

      console.log(stringifyData);

      dispatch({ type: t.FETCH_COINS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: t.FETCH_COINS_FAILED, payload: error });
    }
  };
