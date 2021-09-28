/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import currentToken from '../containers/Tokenchecker';
import { fetchMeasurementsAsync } from '../actions/measurement';

const Pogress = ({ measurements, fetchMeasurements }) => {
  useEffect(() => {
    fetchMeasurements();
  }, []);
  if (currentToken() === null) {
    return <Redirect to="/login" />;
  }
  console.log(measurements);
  return (
    <div>
      {measurements !== undefined
        ? measurements.map((measurement) => (
          <div key={measurement.id}>
            <div className="p-2">
              {(measurement.created_at)}
              <CircularProgressbar value={measurement.measure} />
            </div>
          </div>
        )) : <p>No measurements</p>}
    </div>
  );
};

Pogress.propTypes = {
  fetchMeasurements: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  measurements: state.measurementReducer.measurements,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMeasurements: () => (
    dispatch(fetchMeasurementsAsync())
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pogress);
