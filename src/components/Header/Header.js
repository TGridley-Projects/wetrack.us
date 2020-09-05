import React, { useEffect } from "react";
import Axios from "axios";
import logo from "../Assets/wtu1logo.png";
import { Link } from 'react-router-dom';
import { addUser } from '../../redux/Reducers/AuthReducer';
import { withrouter } from 'react-router-dom';
import { connect } from 'react-redux';



const Header= function(props) {

useEffect(() => {
  props.addUser();
  console.log(props.user);
  // if(props.user.username === ""){
  //   props.history.push("/");
  // }
},[])

  const logout = ()=>{
    Axios.post('/auth/logout')
  }
 const getUser = () => {
   Axios.post('/auth/')
   .then(res => console.log(res))
 }

 useEffect(() => {getUser()},[])
    return (
    <div className="header">
      
      <img src={logo} alt="WeTrack.Us logo" />
      <section className="headerButtons">
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
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  console.log('state',reduxState)
  return reduxState
}

export default connect (mapStateToProps, { addUser })(Header);
