import React from 'react';

const Displaymain = (props) =>{
    let type = "";
    const {workout_type, title, distance, username} = props.workout;
    if(workout_type === 1){type = "run"}else if(workout_type === 2){type = "walk"}else{type = "bike ride"}
       
    return(
    <div>
        <h1>workout</h1>
        {username}
        {type}
        {distance}
        {title}
    </div>)
}

export default Displaymain;