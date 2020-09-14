import React from "react";
import "./Displayother.css";

const Displayother = (props) => {
  const { title, time, username } = props.workout;
  return (
    <div className="display">
      <section className="workoutBoxMobile">
        <p>
          {username} just worked out for {time}
        </p>
      </section>
      <section className="workoutBoxLarge">
        <p>
          {username} just worked out for {time}
        </p>
        <p>Titled: {title}</p>
      </section>
    </div>
  );
};

export default Displayother;
