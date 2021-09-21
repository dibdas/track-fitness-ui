/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default-member */
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';
import Measurement from '../components/Measurement';
import { useState } from 'react';
const Measurement=({exercises})=>{
  const [leftbicep,setLeftBicep]=useState(0);
  const [rightbicep,setRightBicep]=useState(0);
  const [waist,setWaist] = useState(0);
  const [hip,setHip] = useState(0);
  const [leftthigh,setLeftThigh] = useState(0);
  const [rightthigh,setRightThigh] = useState(0);
  const [createdAt,setCreatedAt] = useState(0);

  const handleDate=(e)=>{
    setCreatedAt(e.target.value)
    
    };

  const handleDate = e => {
    setCreatedAt(e.target.value);
  };


const mapStateToProps = (state) => {
  state.measurements.data;
};
const mapDispatchToProps = {
  getexercise: (id) => exercise(id),
  getpostmeasurement: (id) => postmeasurement(id),
  measurement: (id) => measurement(id),

};
}
export default connect(mapDispatchToProps, mapStateToProps)(Measurement);
