import {
  ERROR_EXERCISE, SUCCESS_EXERCISE, EXERCISE,
} from '../actions/constant';

const defaultState = { exercise: {}, status: EXERCISE, error: null };
const exerciseReducer = (state=defaultState, action) => {
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
