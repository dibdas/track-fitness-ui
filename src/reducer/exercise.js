import { FETCHING_EXERCISES, ERROR_EXERCISE, SUCCESS_EXERCISE } from '../actions/exercise';

const defaultState = { exercise: {}, error: null };
const exerciseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_EXERCISE:
      return {
        ...state,
        exercise: action.data,
        error: null,
      };
    case ERROR_EXERCISE:
      return {
        ...state,
        error: null,
      };
    case FETCHING_EXERCISES:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export default exerciseReducer;
