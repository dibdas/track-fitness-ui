/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default-member */
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import ExeciseForm from '../components/ExerciseForm';
import { addMeasurementsAsync } from '../actions/measurement';

const MeasurementContainer = ({ exercises, setMeasurement }) => {
  const [leftbicep, setLeftBicep] = useState(0);
  const [rightbicep, setRightBicep] = useState(0);
  const [waist, setWaist] = useState(0);
  const [hip, setHip] = useState(0);
  const [leftthigh, setLeftThigh] = useState(0);
  const [rightthigh, setRightThigh] = useState(0);
  const [createdAt, setCreatedAt] = useState(0);
  const handleMeasurement = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'leftbicep':
        return setLeftBicep(value);
      case 'rightbicep':
        return setRightBicep(value);
      case 'hip':
        return setHip(value);
      case 'leftthigh':
        return setLeftThigh(value);
      case 'rightthigh':
        return setRightThigh(value);
      case 'waist':
        return setWaist(value);
      default:
        return 0;
    }
  };

  const handleSubmit = () => {
    const measurements = {
      leftbicep,
      rightbicep,
      hip,
      leftthigh,
      rightthigh,
      waist,
    };

    setMeasurement(measurements);
    const sum = leftbicep + rightbicep + hip + leftthigh + rightthigh + waist;
    const percentage = ((sum * 100) / 300);
    return percentage;
  };

  const handleDate = (e) => {
    setCreatedAt(e.target.value);
  };

  return (
    <div className="text-center my-4 bg-warning">
      <h4>Add Measurement</h4>
      <div>
        <input
          type="date"
          placeholder="enter the date"
          name={createdAt}
          onChange={(e) => { handleDate(e); }}
        />
      </div>
      <ul className="list-unstyled">
        {exercises.map((exercise) => (
          <ExeciseForm
            name={exercise}
            key={exercise}
            setMeasurement={handleMeasurement}
          />
        ))}
      </ul>
      <button type="button" className="btn btn-success" onClick={() => handleSubmit()}>Add</button>
    </div>
  );
};

MeasurementContainer.propTypes = {
  exercises: PropTypes.func.isRequired,
  setMeasurement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  measurements: state.measurements,
});
const mapDispatchToProps = (dispatch) => ({
  setMeasurement: (measure) => (
    dispatch(addMeasurementsAsync(measure))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementContainer);