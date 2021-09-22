/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default-member */
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';
import Measurement from '../components/Measurement';
import { useState } from 'react';
import ExeciseForm from '../components/ExerciseForm';
import checkTokens from '../containers/Tokenchecker';
const Measurement=({exercises})=>{
  const [leftbicep,setLeftBicep]=useState(0);
  const [rightbicep,setRightBicep]=useState(0);
  const [waist,setWaist] = useState(0);
  const [hip,setHip] = useState(0);
  const [leftthigh,setLeftThigh] = useState(0);
  const [rightthigh,setRightThigh] = useState(0);
  const [createdAt,setCreatedAt] = useState(0);

  const setMeasurement = (e) =>{
    const {name,value} = e.target
    switch (name) {
      case 'leftbicep':
        return setLeftBicep(value);
      case 'rightbicep' :
        return setRightBicep(value);
      case 'hip':
          return setHip(value);
      case 'leftthigh' :
        return setLeftThigh(value);
      case 'rightthigh' :
        return setRightThigh(value);
      case 'waist':
        return setWaist(value);
        default :
        return 0;
    }
  }
  const setPercentage = (e) =>{
    const {value} = e.target
        sum = setLeftBicep(value)+setRightBicep(value)+ setHip(value)+
        setLeftThigh(value)+ setRightThigh(value)+setWaist(value);
        const percentage=((sum*100)/300)
      
  }

  const handleDate=(e)=>{
    setCreatedAt(e.target.value)
  };

  return (
    <div>
      <h4>Add Measurement</h4>
      <div>
      <input
        type="date"
        placeholder="enter the date"
        name={createdAt}
        onChange={(e) => { handleDate(e); }}
      />
      </div>
      <ul>
        {exercises.map(exercise =>
        < ExeciseForm name={exercise.name} handleMeasurement ={(e)=>{setMeasurement(e)}}/>
        )}
      </ul>
      <button type="button" onClick={()=>setPercentage}></button>

    </div>
  )
}
  


Measurement.propTypes={
  exercises:PropTypes.func.isRequired

}
const mapStateToProps = (state) => ({
  exercises: state.exercise,
});
const mapDispatchToProps = {
  
};

export default connect(mapDispatchToProps, mapStateToProps)(Measurement);
