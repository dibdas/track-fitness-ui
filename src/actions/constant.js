export const FETCHING_EXERCISES = 'FETCHING_EXERCISES';
export const ERROR_EXERCISE = 'ERROR_EXERCISE';
export const SUCCESS_EXERCISE = 'SUCCESS_EXERCISE';
export const SUCCESS_MEASUREMENT = 'SUCCESS_MEASUREMENT';
export const fetchingCategories = () => ({ type: FETCHING_CATEGORIES });

const ERROR_MEASUREMENT = 'ERROR_MEASUREMENT';
const successmeasure = (data) => ({
  type: 'SUCCESS_MEASUREMENT',
  data,
});
