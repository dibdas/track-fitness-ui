/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import config_url from './prod';

export const SUCCESS_MEASUREMENT = 'SUCCESS_MEASUREMENT';
export const ERROR_MEASUREMENT = 'ERROR_MEASUREMENT';
export const FETCH_MEASUREMENT = 'FETCH_MEASUREMENT';
export const ADD_MEASUREMENT_ERROR = 'ADD_MEASUREMENT_ERROR';

export const addMeasurementsError = () => ({ type: ADD_MEASUREMENT_ERROR });

export const successMeasurements = (measurements) => ({
  type: SUCCESS_MEASUREMENT,
  measurements,
});
export const errorMeasurements = () => ({
  type: ERROR_MEASUREMENT,
});

export const fetchMeasurementsAsync = () => async (dispatch) => {
  fetch(`${config_url()}/measurements/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((result) => {
      if (result.status !== 200) {
        return dispatch(errorMeasurements());
      }
      return result.json();
    })
    .then((data) => {
      console.log(data);
      dispatch(successMeasurements(data));
    })
    .catch(() => dispatch(errorMeasurements()));
};

export const addMeasurementsAsync = (params) => async (dispatch) => (
  fetch(`${config_url()}/measurements/`, {
    method: 'POST',
    body: JSON.stringify({ measurements: params }),
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((result) => result.json())
    .then((data) => dispatch({ type: SUCCESS_MEASUREMENT, data }))
);
