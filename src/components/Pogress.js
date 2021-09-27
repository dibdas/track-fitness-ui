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
import { fetchMeasurementsAsync } from '../actions/measurement';

const Pogress = ({ fetchMeasurements }) => {
  if (currentToken() === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      {fetchMeasurements.map((measurement) => (
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
  fetchMeasurements: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  measurements: state.measurements,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMeasurement: (measure) => (
    dispatch(fetchMeasurementsAsync(measure))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pogress);
