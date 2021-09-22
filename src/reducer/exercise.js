/* eslint-disable consistent-return */
/* eslint-disable import/named */
/* eslint-disable default-case */
import {
  ERROR_EXERCISE, SUCCESS_EXERCISE, EXERCISE, SUCCESS,
} from '../actions/constant';

const defaultState = { exercise: {}, status: EXERCISE, error: null };
const exerciseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_EXERCISE:
      return {
        ...state,
        status: SUCCESS,
        exercise: action.data,
        error: null,
      };
    case ERROR_EXERCISE:
      return {
        ...state,
        status: SUCCESS,
        exercise: action.data,
        error: null,
      };
  }
};
export default exerciseReducer;
