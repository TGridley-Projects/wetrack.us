import Axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../redux/Reducers/AuthReducer"
import "./Myprofile.css"

const Myprofile = function (props) {
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setUser({...user,
        [e.target.name]: e.target.value,
    });
};
  const editProfile = async (user) =>{
    const {username, profile_pic, phone_number, email} = user;
    await Axios.put("/api/profileedit", {username, profile_pic, phone_number, email})
    .then((res) => {
      console.log(res.data);
      const { username, profile_pic, phone_number, email } = res.data;
      addUser(username, profile_pic, phone_number, email);
      console.log(props.authReducer)
    })
  }

  useEffect(() => {
    setUser(props.authReducer);
  }, [props.authReducer]);

  return (
    <div className="myProfile">
      <img className="myProfilePic" src={user.profile_pic} alt="profile" />
      <p>Username</p>
      <input 
        className="profileInput"
        onChange={(e) => handleChange(e)}
        name="username"
        type="text"
        value={user.username}
        required
      />
      <p>Phone Number</p>
      <input
        className="profileInput"
        onChange={(e) => handleChange(e)}
        name="phone_number"
        type="integer"
        value={user.phone_number}
      />
      <p>Email</p>
      <input
        className="profileInput"
        onChange={(e) => handleChange(e)}
        name="email"
        type="email"
        value={user.email}
      />
      <button onClick={e => {console.log('user',user); console.log('props', props.authReducer);editProfile(user);}}>Save Edits</button>
      <button>Delete My Profile</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps, addUser)(Myprofile);
