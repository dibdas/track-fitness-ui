const ERROR_MEALS = 'ERROR_MEALS';
const SUCCESS_MEALS = 'SUCCESS_MEALS';
const SUCCESS_MEAL = 'SUCCESS_MEAL';
const IDLE_MEALS = 'IDLE_MEALS';
const CHANGE_CATEGORY = ' CHANGE_CATEGORY';
const successmeals = (data) => ({
  type: 'SUCCESS_MEALS',
  data,
});

const successmeal = (data) => ({
  type: 'SUCCESS_MEAL',
  data,
});

const errormeals = (error) => ({
  type: 'ERROR_MEALS',
  error,
});
const changecategory = (category) => ({
  type: 'CHANGE_CATEGORY',
  category,

});
export {
