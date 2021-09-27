/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable default-case */
// eslint-disable-next-line no-unused-vars

import {
  ERROR_MEASUREMENT, FETCH_MEASUREMENT, ADD_MEASUREMENT_ERROR, SUCCESS_MEASUREMENT,
} from '../actions/measurement';

const defaultState = { measurement: {}, status: null, error: null };
const measurementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_MEASUREMENT:
      return {
        ...state,
        state: action.data,
        exercise: action.data,
        error: null,
      };
    case ERROR_MEASUREMENT:
      return {
        ...state,
        error,
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
