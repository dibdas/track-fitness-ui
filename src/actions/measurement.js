/* eslint-disable consistent-return */
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
  fetch('/measurement', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(((result) => {
      if (result.status !== 200) {
        return dispatch(errorMeasurements());
      }
    })
      .then((data) => dispatch(successMeasurements(data)))
      .catch(() => dispatch(errorMeasurements())));
};
export const addMeasurementsAsync = () => {
  fetch('/measurement', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  });
};
