import React, { useState } from "react";
import Header from "../Header/Header";
import Axios from "axios";
import { Link } from "react-router-dom";

function Newother() {
  const [title, setTitle] = useState("");
  const [intensity, setIntensity] = useState(null);
  const [time, setTime] = useState("");
  const [heart_rate, setHR] = useState(null);

  function resetState() {
    setTitle("");
    setTime("");
    setIntensity("");
    setHR("");
  }

  function addWorkout() {
    Axios.post("/api/other_workout", {
      title,
      intensity,
      time,
      heart_rate,
    })
      .then(alert("Your workout was successfully subitted!"))
      .catch((err) => {
        console.log(err);
        alert("There was an error submitting this workout, please try again.");
      });
  }

  return (
    <div className="newOther">
      <Header />
      <h1>New Other Workout</h1>
      <div>
        <input
          className="inputField"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
         <input
          className="inputField"
          type="text"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          placeholder="Intensity 1 to 10 (subjective)"
        />
        <input
          className="inputField"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time hr:min:sec"
          />   
        <input
          className="inputField"
          type="text"
          value={heart_rate}
          onChange={(e) => setHR(e.target.value)}
          placeholder="Average heart rate"
        />
        <button onClick={(e) => resetState()}>Reset</button>
        <Link to="/dashboard">
          <button onClick={(e) => addWorkout()}>Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Newother;
