/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable default-case */
// eslint-disable-next-line no-unused-vars
import { measurement } from '../actions/api';
import {
  SUCCESS_MEASUREMENT, ERROR_MEASUREMENT, SUCCESS,
} from '../actions/constant';

const defaultState = { measurement: {}, status: Measurement, error: null };
const measurementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_MEASUREMENT:
      return {
        ...state,
        status: SUCCESS,
        exercise: action.data,
        error: null,
      };
    case ERROR_MEASUREMENT:
      return {
        ...state,
        status: SUCCESS,
        exercise: action.data,
        error: null,
      };
  }
};
export default measurementReducer;
