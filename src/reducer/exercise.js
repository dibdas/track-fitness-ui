import { FETCHING_EXERCISES, FETCHING_EXERCISE_ERROR, FETCHING_EXERCISE_SUCCESS } from '../actions/exercise';

const defaultState = { exercise: {}, error: null };
const exerciseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_EXERCISE_SUCCESS:
      return {
        ...state,
        exercise: action.data,
        error: null,
      };
    case FETCHING_EXERCISE_ERROR:
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
