/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import currentToken from '../api/Tokenchecker';
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
    <div className="col text-center mx-5 px-5 my-4 py-4 ">
      <div className="col-4 oval-2 text-center px-5">
        {measurements !== undefined
          ? measurements.map((measurement) => (
            <div key={measurement.id}>
              <div className="flex-col pt-4 align-items-center ">
                {(measurement.created_at)}
              </div>
              <div className="flex-col col-4 border border-1 text-center my-4 mx-4 px-4">
                <CircularProgressbar value={measurement.measure} />
              </div>
            </div>
          )) : <p> No measurements, if you dont find  kindly reload </p>}

      </div>
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
