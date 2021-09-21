import React from 'react';
import { PropTypes } from 'prop-types';

const ExeciseForm = (name, measureChange) => (
  <li>
    <div>
      <h4>{name}</h4>
      <input
        type="number"
        placeholder="enter a value"
        onChange={(e) => { measureChange(e); }}
        name={name}
      />
    </div>
  </li>

);
ExeciseForm.propTypes = {
  name: PropTypes.string.isRequired,
  measureChange: PropTypes.func.isRequired,

};
export default ExeciseForm;
