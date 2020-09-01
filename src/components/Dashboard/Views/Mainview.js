import React, { useState, useEffect } from "react";
import Axios from "axios";
import Display from "../../Display/Displaymain";

const Mainview = () => {
  const [workouts, setWorkouts] = useState([]);
   
  const getMainWorkouts = () => {
    Axios.get("/api/mainworkouts5")
    .then((res) => {
      setWorkouts(res);
    })
    .catch((err) => console.log(err));
  };
  const getUser = (id) => {
    Axios.get(`/api/profile/?${id}`)
    .then(res => {return(console.log(res.username),(res.username))})
    .catch(err => console.log(err))
    
  }
  
  const toDisplay = () => {
    if(workouts.data){
    workouts.data.map((workout, ind) => {
        return <Display key={workout.main_workout_id} workout={workout} username={getUser(workout.user_id)}/>;
      });
    };}
    useEffect(() => {getMainWorkouts()},[])
    return (
      <div>
      {toDisplay()}
    </div>
  );
};

export default Mainview;
