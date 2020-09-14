import React, { useEffect, useState } from "react";
import Axios from "axios";
import logo from "../Assets/wtu1logo.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../redux/Reducers/AuthReducer";
import "./Header.css";

const Header = (props) => {
  const [dropdownVisible, setDropdown] = useState(false);
  const [user, setUser] = useState("");

  const logout = () => {
    Axios.post("/auth/logout");
  };

  const reload = () => {
    Axios.get("auth/user").then((res) => {
      console.log(res.data);
      const { username, profile_pic, phone_number, email } = res.data;
      addUser(username, profile_pic, phone_number, email);
      setUser(profile_pic);
    });
  };

  useEffect(() => {
    reload();
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropdownVisible);
  };

  return (
    <div className="header">
      <section className="headerImages">
      <img className="logo" src={logo} alt="WeTrack.Us logo" />
      <Link to="/myprofile" className="userImage"><img
        className="userImage"
        src={props.authReducer.profile_pic}
        alt="profile"
      /></Link>
      {console.log(props.authReducer)}
      </section>
      <section className="desktopMenu">
        <Link to="/newmain">
          <button>Add a walk/bike ride/run</button>
        </Link>
        <Link to="/newother">
          <button>Add a workout</button>
        </Link>
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="/search">
          <button>Search workouts</button>
        </Link>
        <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link>
      </section>
      <div className="dropDown" onClick={toggleDropdown}>
        Menu &#9776;
      </div>
      {dropdownVisible ? (
        <section className="mobileMenu">
          <Link to="/newmain">
            <button className="mobileButton">Add a walk/bike ride/run</button>
          </Link>
          <Link to="/newother">
            <button className="mobileButton">Add a workout</button>
          </Link>
          <Link to="/dashboard">
            <button className="mobileButton">Home</button>
          </Link>
          <Link to="/search">
            <button className="mobileButton">Search workouts</button>
          </Link>
          <Link to="/">
            <button className="mobileButton" onClick={logout}>
              Logout
            </button>
          </Link>
        </section>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, addUser)(withRouter(Header));
