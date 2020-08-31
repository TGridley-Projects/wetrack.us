import React, { useState } from "react";
import Header from "../Header/Header";
import Axios from "axios";
import { Link } from 'react-router-dom';

function Newmain() {
  const [workout_type, setExercise] = useState(1);
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState('');
  const [steps, setSteps] = useState(null);
  const [heart_rate, setHR] = useState(null);

  function resetState(){
    setExercise(1);
    setTitle('');
    setDistance('');
    setTime('');
    setSteps('');
    setHR('');
  }

  function addWorkout () {
    Axios.post('/api/main_workout', {workout_type, title, distance, time, steps, heart_rate})
    .then(alert('Your workout was successfully subitted!'))
    .catch(err => {
      console.log(err)
      alert('There was an error submitting this workout, please try again.')
    })
    }

  return (
    <div className="newMain">
      <Header />
      <h1>New Main Workout</h1>
      <div onChange={(e) => setExercise(e.target.value)}>
        <input type="radio" value={1} defaultChecked name="exerciseType" /> Run
        <input type="radio" value={2} name="exerciseType" /> Walk
        <input type="radio" value={3} name="exerciseType" /> Bike
      </div>
      <input className='inputField' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
      <input className='inputField' type="text" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Distance in miles"/>
      <input className='inputField' type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time hr:min:sec"/>
      <input className='inputField'type="text" value={steps} onChange={(e) => setSteps(e.target.value)} placeholder="Steps or cadence"/>
      <input className='inputField' type="text" value={heart_rate} onChange={(e) => setHR(e.target.value)} placeholder="Average heart rate"/>
      <button onClick={e => resetState()}>Reset</button>
      <Link to='/dashboard'><button onClick={e => addWorkout()}>Submit</button></Link>
    </div>
  );
}

export default Newmain;
