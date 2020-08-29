import React, { useState } from "react";
import Header from "../Header/Header";
import e from "express";

function Newmain() {
    const [exerciseType, setExercise] = useState('');
  
//   setExercise(e) {
//     exerciseType: e.target.value;
//   }
  
    return (
      <div className="newMain">
        <Header />
        <h1>New Main Workout</h1>
        <div onChange={(e) => setExercise(value)}>
          <input type="radio" value="running" defaultChecked name="exerciseType" /> Run
          <input type="radio" value="walking" name="exerciseType" /> Walk
          <input type="radio" value="biking" name="exerciseType" /> Bike
        </div>
      </div>
    );
  }

export default Newmain;
