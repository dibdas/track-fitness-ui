/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable default-case */
// eslint-disable-next-line no-unused-vars

import {
  ERROR_MEASUREMENT, FETCH_MEASUREMENT, ADD_MEASUREMENT_ERROR, SUCCESS_MEASUREMENT,
} from '../actions/measurement';

const defaultState = {
  measurement: [{
    Measurement_id: '1',
    measure: '1.0',
    user_id: '6',
    created_at: '2021-09-27 18:25:13.421718000 +0000',
    updated_at: '2021-09-27 18:25:13.421718000 +0000',
    exercise_id: '1',
  },
  {
    Measurement_id: '2', measure: '3.0', user_id: 6, created_at: '2021-09-27 18:25:13.451409000 +0000', updated_at: '2021-09-27 18:25:13.451409000 +0000', exercise_id: '2',
  },
  {
    Measurement_id: '3', measure: '3.0', user_id: 6, created_at: '2021-09-27 18:25:13.466747000 +0000', updated_at: '2021-09-27 18:25:13.466747000 +0000', exercise_id: 3,
  },
  ],
};

const measurementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_MEASUREMENT:
      return {
        ...state,
        measurements: action.measurements,
        error: null,
      };
    case ERROR_MEASUREMENT:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_MEASUREMENT:
      return {
        ...state,
        state: action.data,
        status: SUCCESS,
        error: null,
      };
    case ADD_MEASUREMENT_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
export default measurementReducer;
