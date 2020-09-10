import React, { useState } from "react";
import { useSelector } from "react-redux";


const Myprofile = function () {
  const [user, setUser] = useState([]);
  
  
  const Profile  = () => {
    const profileItems = useSelector(state => setUser(state));
    return(profileItems)
  }
    
  return (
    <div className="myProfile">
      <h1>My Profile</h1>
      {Profile}
      {console.log('My profile', user)}
    </div>
  );
};

export default Myprofile;
