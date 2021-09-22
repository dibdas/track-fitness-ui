/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Pogress = ({ measurements }) => (
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
