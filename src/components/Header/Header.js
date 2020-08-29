import React from "react";
import logo from "../Assets/wtu1logo.png";
import { Link } from 'react-router-dom';

const Header= function(props) {
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
        <Link to= '/'><button>
          Logout
          </button></Link>
      </section>
    </div>
  );
}

export default Header;
