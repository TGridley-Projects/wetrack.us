import React, { useState, useEffect } from "react";
import Axios from "axios";
import Displayother from "../../Display/Displayother";

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
        return(<Displayother key="workouts.other_workout_id" workout={workout}/>);
      });
    
    useEffect(() => {getOtherWorkouts()},[])
    return (
      <div>
      {toDisplay}
    </div>
  );
};

export default Otherview;