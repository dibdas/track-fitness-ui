/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';
import currentToken from '../containers/Tokenchecker';

console.log(currentToken.currentToken);
if (currentToken() == null) {
  <Redirect
    to={{
      pathname: '/login',
      search: '?utm=your+face',
      // state: { referrer: currentLocation },
    }}
  />;
}
const ExeciseForm = ({ name, measureChange }) => (

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
