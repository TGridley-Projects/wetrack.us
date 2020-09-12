import React from "react";
import "./Displaymain.css";

const Displaymain = (props) => {
  let type = "";
  const { workout_type, title, distance, username } = props.workout;
  if (workout_type === 1) {
    type = "run";
  } else if (workout_type === 2) {
    type = "walk";
  } else {
    type = "bike ride";
  }

  return (
    <div className="Displaymain">
      <section className="workoutBoxMobile">
        <p>
          {username} completed a {type} of {distance} miles!
        </p>
      </section>
      <section className="workoutBoxTablet">
        <p>
          {username} completed a {type} of {distance} miles!
        </p>
        {title}
      </section>
      <section className="workoutBoxLarge">
        <p>
          {username} completed a {type} of {distance} miles!
        </p>
        {title}
      </section>
    </div>
  );
};

export default Displaymain;
