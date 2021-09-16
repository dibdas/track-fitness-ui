const ERROR_EXERCISE = 'ERROR_EXERCISE';
const SUCCESS_EXERCISE = 'SUCCESS_EXERCISE';
const SUCCESS_MEASUREMENT = 'SUCCESS_MEASUREMENT';
const ERROR_MEASUREMENT = 'ERROR_MEASUREMENT';
const successmeasure = (data) => ({
  type: 'SUCCESS_MEASUREMENT',
  data,
});

const successexercise = (data) => ({
  type: 'SUCCESS_EXERCISE',
  data,
});

const errorexercise = (error) => ({
  type: 'ERROR_EXERCISE',
  error,
});

const errormeasure = (error) => ({
  type: 'ERROR_MEASUREMENT',
  error,
});

export {
  ERROR_EXERCISE, SUCCESS_EXERCISE,
  SUCCESS_MEASUREMENT, ERROR_MEASUREMENT,
  successexercise, successmeasure, errorexercise, errormeasure,
};
