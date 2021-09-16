import { connect } from 'react-redux';
import { exercise, postmeasurement, measurement } from '../actions/api';
import Measurement from '../components/Measurement';

const mapStateToProps = (state) => {
  state.measurements.data;
};
const mapDispatchToProps = {
  getexercise: (id) => exercise(id),
  getpostmeasurement: (id) => postmeasurement(id),
  measurement: (id) => measurement(id),

};
export default connect(mapDispatchToProps, mapStateToProps)(Measurement);
