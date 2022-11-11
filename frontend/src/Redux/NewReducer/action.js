import * as types from './actionTypes';
import axios from 'axios';

const getNewBestRecordRequest = () => {
  return {
    type: types.GET_NEW_RECORD_REQUEST,
  };
};

const getNewRecord = (params) => (dispatch) => {
  dispatch(getNewBestRecordRequest());
  return axios
    .get('http://localhost:8080/flash', params)
    .then((r) => {
      return dispatch({
        type: types.GET_NEW_RECORD_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_NEW_RECORD_FAILURE });
    });
};

export { getNewRecord };
