import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import currentToken from '../containers/Tokenchecker';

const ExeciseForm = ({ name, setMeasurement }) => {
  if (currentToken() === null) {
    return <Redirect to="/login" />;
  }

  return (
    <li>
      <div className="text-center">
        <h4>{name}</h4>
        <input
          type="number"
          placeholder="enter a value"
          onChange={(e) => { setMeasurement(e); }}
          name={name}
        />
      </div>
    </li>
  );
};

ExeciseForm.propTypes = {
  name: PropTypes.string.isRequired,
  setMeasurement: PropTypes.func.isRequired,

};
export default ExeciseForm;
