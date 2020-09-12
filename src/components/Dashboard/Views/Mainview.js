import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Mainview.css";
import Displaymain from "../../Display/Displaymain";

const Mainview = () => {
  const [workouts, setWorkouts] = useState([]);

  const getMainWorkouts = () => {
    Axios.get("/api/mainworkouts5")
      .then((res) => {
        setWorkouts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const toDisplay = workouts.map((workout) => {
    return <Displaymain key={workout.main_workout_id} workout={workout} />;
  });

  useEffect(() => {
    getMainWorkouts();
  }, []);
  return (
    <div className="mainView">
      <p>Runs/Walks/Bike Rides</p>
      {toDisplay}
    </div>
  );
};

export default Mainview;
