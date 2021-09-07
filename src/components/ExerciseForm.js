/* eslint-disable react/destructuring-assignment */
const ExeciseForm = (measurements, exercise, measureChange) => (
  <div>
    <h4>{exercise.name}</h4>
    <input onChange={measureChange} value={measurements[exercise.id]} placeholder="30" type="number" />
  </div>

);
export default ExeciseForm;
