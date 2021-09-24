export const FETCHING_EXERCISES = 'FETCHING_EXERCISES';
export const FETCHING_EXERCISE_ERROR_ = 'FETCHING_EXERCISE_ERROR';
export const FETCHING_EXERCISE_SUCCESS = 'FETCHING_EXERCISE_SUCCESS';

export const fetchingExercises = () => ({ type: FETCHING_EXERCISES });

const fetchExerciseSuccess = (exercises) => ({
  type: FETCHING_EXERCISE_SUCCESS,
  exercises,
});

export const fetchExerciseError = () => ({
  type: 'FETCHING_EXERCISE_ERROR',

});

export const fetchExerciseAsync = () => (
  async (dispatch) => {
    dispatch(fetchingExercises());
    return fetch('/exercise', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((result) => result.json)
      .then((exercises) => dispatch(fetchExerciseSuccess(exercises)))
      .catch(() => dispatch(fetchExerciseError()));
  }
);
