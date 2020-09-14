import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Myprofile.css"

const Myprofile = function (props) {
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setUser({
        [e.target.name]: e.target.value,
    });
};

  useEffect(() => {
    setUser(props.authReducer);
  }, []);

  return (
    <div className="myProfile">
      <img className="myProfilePic" src={user.profile_pic} alt="profile" />
      <p>Username</p>
      <input
        onChange={(e) => handleChange(e)}
        name="username"
        type="text"
        value={user.username}
        required
      />
      <p>Phone Number</p>
      <input
        onChange={(e) => handleChange(e)}
        name="phone_number"
        type="integer"
        value={user.phone_number}
      />
      <p>Email</p>
      <input
        onChange={(e) => handleChange(e)}
        name="email"
        type="email"
        value={user.email}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Myprofile);
