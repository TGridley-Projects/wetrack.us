import React, { useState } from "react";
import Axios from "axios";
import Displaymain from "../Display/Displaymain";
import Displayother from "../Display/Displayother";

const Search = () => {
  const [searchByType, setByType] = useState(1);
  const [startNum, setStartNum] = useState(0);
  const [displayData, setDisplay] = useState([]);
  const [totalRows, setTotalRows] = useState(0)

  const findByTypeO = (toStart) => {

      Axios.post('/api/typeO', { toStart })
      .then((res) => {setDisplay(res.data)})
  }
  
  const findByTypeM = (toStart) => {

      Axios.post('/api/typeO', { toStart })
      .then((res) => {setDisplay(res.data)})
  }
  
  const toDisplay = displayData.map((workout) =>{ if(workout.other_workout_id > totalRows){setTotalRows(workout.other_workout_id)} return <Displayother key={workout.other_workout_id} workout={workout}/>})

  const nextFive = () =>{
      const newStart = startNum + 5;
    const rounded = (num) => {return Math.ceil(num/5)*5};
    if(rounded(totalRows) === newStart){
        return(alert('You have reached the end'))
    } else {
    setStartNum(newStart);
    if(searchByType === 4){
        findByTypeO(newStart)
      }else {findByTypeM(newStart)}
  }}

  const previousFive = () =>{
      if(startNum <= 0 ){return(alert('You are at the begining of the search'))
    } else {
      const newStart = startNum - 5;
      setStartNum(newStart);
      if(searchByType === 4){
        findByTypeO(newStart)
      }else {findByTypeM(newStart)};
  }}

  const typeSearch = () =>{
      const newStart = 0;
      setStartNum(newStart);
      if(searchByType === 4){
          findByTypeO(newStart)
        }else {findByTypeM(newStart)}
  }

  return (
    <div>
      <h1>Search</h1>
      <p>1. Run, 2. Walk, 3. Bike Ride, 4.Other</p>
      <input
        type="text"
        placeholder="Enter workout by number"
        onChange={(e) => {
          setByType(e.target.value);
        }}
        value={searchByType}
      />
      <button onClick={(e) => {typeSearch()}}>Search</button>
      {toDisplay}
      <button onClick={(e) => {previousFive()}}>Previous 5</button>
      <button onClick={(e) => {nextFive()}}>Next 5</button>
    </div>
  );
};

export default Search;
