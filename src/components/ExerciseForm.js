/* eslint-disable react/destructuring-assignment */

import PropTypes from 'prop-types';



const ExeciseForm = (measurements, exercise, measureChange) => (
  <div>
    <h4>{exercise.name}</h4>
    <input onChange={measureChange} value={measurements[exercise.id]} placeholder="30" type="number" />
  </div>

);
ExeciseForm.propTypes = {
  measureChange = PropTypes.func.isRequired,
  exercise= PropTypes.objectOf(PropTypes.any).isRequired,
  measurements=PropTypes.objectOf(PropTypes.array).isRequired,


};
export default ExeciseForm;
