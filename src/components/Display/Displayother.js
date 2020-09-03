import React from 'react';

const Displayother = (props) =>{
    const {title, time, username} = props.workout;
    return(
    <div>
        <h1>workout</h1>
        {username}
        {time}
        {title}
    </div>)
}

export default Displayother;