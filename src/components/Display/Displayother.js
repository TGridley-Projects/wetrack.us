import React from "react";
import "./Displayother.css"

const Displayother = (props) => {
  const { title, time, username } = props.workout;
  return (
    <div className="Displayother">
      <section className="workoutBoxMobile">
        <p>
          {username} just worked out for {time}
        </p>
      </section>
      <section className="workoutBoxTablet">
        <p>
          {username} just worked out for {time}
        </p>
        {title}
      </section>
      <section className="workoutBoxLarge">
       <p>{username} just worked out for {time}</p>
        {title}
    </section>
    </div>
  );
};

export default Displayother;
