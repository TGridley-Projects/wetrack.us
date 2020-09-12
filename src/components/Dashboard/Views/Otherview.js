import React, { useState, useEffect } from "react";
import Axios from "axios";
import Displayother from "../../Display/Displayother";
import "./Otherview.css";

const Otherview = () => {
  const [workouts, setWorkouts] = useState([]);
   
  const getOtherWorkouts = () => {
    Axios.get("/api/otherworkouts5")
    .then((res) => {
      setWorkouts(res.data);
    })
    .catch((err) => console.log(err));
  };
  
  const toDisplay = 
    workouts.map((workout) => {
        return(<Displayother key={workout.other_workout_id} workout={workout}/>);
      });
    
    useEffect(() => {getOtherWorkouts()},[])
    return (
      <div className="otherView">
        <p>Other Workouts</p>
      {toDisplay}
    </div>
  );
};

export default Otherview;