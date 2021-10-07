/* eslint-disable camelcase */
export const FETCHING_EXERCISES = 'FETCHING_EXERCISES';
export const FETCHING_EXERCISE_ERROR = 'FETCHING_EXERCISE_ERROR';
export const FETCHING_EXERCISE_SUCCESS = 'FETCHING_EXERCISE_SUCCESS';

export const fetchingExercises = () => ({ type: FETCHING_EXERCISES });

const fetchExerciseSuccess = (exercises) => ({
  type: FETCHING_EXERCISE_SUCCESS,
  exercises,
});

export const fetchExerciseError = () => ({
  type: FETCHING_EXERCISE_ERROR,

});

export const fetchExerciseAsync = () => (
  async (dispatch) => {
    dispatch(fetchingExercises());
    try {
      const result_1 = await fetch('/exercise', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const exercises = result_1.json;
      return dispatch(fetchExerciseSuccess(exercises));
    } catch (e) {
      return dispatch(fetchExerciseError());
    }
  }
);
