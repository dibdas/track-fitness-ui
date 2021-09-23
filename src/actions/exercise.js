export const FETCHING_EXERCISES = 'FETCHING_EXERCISES';
export const ERROR_EXERCISE = 'ERROR_EXERCISE';
export const SUCCESS_EXERCISE = 'SUCCESS_EXERCISE';

export const fetchingExercises = () => ({ type: FETCHING_EXERCISES });

const successexercise = (data) => ({
  type: 'SUCCESS_EXERCISE',
  data,
});

export const errorexercise = (error) => ({
  type: 'ERROR_EXERCISE',
  error,
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
      .then((exercises) => dispatch(successexercise(exercises)))
      .catch(() => dispatch(errorexercise()));
  }
);
