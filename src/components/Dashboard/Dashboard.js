import React, { useEffect } from "react";
import "./Dashboard.css";
import "../Display/Display.css"
import Mainview from "./Views/Mainview";
import Otherview from "./Views/Otherview";
import { useSelector } from "react-redux";

const Dashboard = function (props) {
  const currentUser = useSelector((state) => state.authReducer);

  useEffect(()=>{if(!currentUser){return currentUser}
    
  })

  return (
    <div className="dashboard">
      <h1>welcome {currentUser.username}</h1>
      <div className="workoutDisplays">
      <section className="mainDisplayed">
        <Mainview />
        </section>
        <section className="otherDisplayed">
        <Otherview />
      </section>
      </div>
    </div>
  );
};

export default Dashboard;
