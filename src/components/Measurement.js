import ExeciseForm from "./ExerciseForm";
import PropTypes from 'prop-types';

const Measurement = ({exercises})=> {
    const 
    const submitForm=(event)=>{
        event.preventDefault();
        const req = Object.keys(Measurement).map((key)=>Measurement.post({
            measurement:{
                measure:Measurement[key]
                exercise_id:  key
            }
        }))

    }
    const meassureChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    return(
        <form onSubmit={submitForm}>
            {exercises.map((exercise)=>(
            <ExeciseForm meassureChange={meassureChange} exercise={exercise} />
            ))}
            <div class="button">Save</div>

        </form>
           
        
    )
}
Measurement.PropTypes={

}
