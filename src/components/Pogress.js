/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import currentToken from '../containers/Tokenchecker';

const Pogress = ({ measurements }) => {
  if (currentToken() === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      {measurements.map((measurement) => (
        <div key={measurement.id}>
          <div className="p-2">
            {(measurement.created_at)}
            <CircularProgressbar value={measurement.measure} />
          </div>
        </div>
      ))}

    </div>
  );
};

Pogress.propTypes = {
  measurements: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    measurements: state.measurements,
  }
);

export default connect(mapStateToProps, null)(Pogress);
