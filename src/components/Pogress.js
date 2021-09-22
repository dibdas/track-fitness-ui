import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const Pogress = ({ measurements, exercises }) => (
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
export default Pogress;
