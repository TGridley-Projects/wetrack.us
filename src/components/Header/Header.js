import React, { useEffect, useState } from "react";
import Axios from "axios";
import logo from "../Assets/wtu1logo.png";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../redux/Reducers/AuthReducer'
import './Header.css'



const Header= (props) => {

  const logout = ()=>{
    Axios.post('/auth/logout')
  }
 
useEffect(() => {
  Axios.get("auth/user")
  .then((res) => {
    console.log(res.data)
    const {username, profile_pic, phone_number, email} = res.data
    props.addUser(username, profile_pic, phone_number, email);})
  if(props.authReducer.username === ''){
    props.history.push("/");
  }
}, [props, props.authReducer.username, props.location.pathname])

const [dropdownVisible, setDropdown] = useState(false);

const toggleDropdown = () =>{
  setDropdown(!dropdownVisible)
};



    return (
    <div className="header">
      <section className="userInfo">
      <img className="userImage"src={props.authReducer.profile_pic} alt="profile"/>
      {console.log(props.authReducer)}
      </section>
      <img className="logo" src={logo} alt="WeTrack.Us logo" />
      <section className="desktopMenu">
        <Link to= '/newmain'><button >
          Add a walk/bike ride/run
        </button></Link>
        <Link to= '/newother'><button>
          Add a workout
        </button></Link>
        <Link to= '/dashboard'><button>
          Home
        </button></Link>
        <Link to= "/search"><button>
          Search workouts
        </button></Link>
        <Link to= '/'><button onClick={logout}>
          Logout
          </button></Link>
      </section>
      <div className="dropDown" onClick={toggleDropdown}>Menu &#9776;</div>
      {dropdownVisible ? (<section className="mobileMenu">
        <Link to= '/newmain'><button >
          Add a walk/bike ride/run
        </button></Link>
        <Link to= '/newother'><button>
          Add a workout
        </button></Link>
        <Link to= '/dashboard'><button>
          Home
        </button></Link>
        <Link to= "/search"><button>
          Search workouts
        </button></Link>
        <Link to= '/'><button onClick={logout}>
          Logout
          </button></Link>
      </section>) : null}
    </div>
  );
}
const mapStateToProps = (state) => {
   return state
}

export default connect (mapStateToProps, addUser)(withRouter(Header));
