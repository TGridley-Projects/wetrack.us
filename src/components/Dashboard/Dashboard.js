import React, { useEffect } from "react";
import "./Dashboard.css";
import Mainview from "./Views/Mainview";
import Otherview from "./Views/Otherview";
import { useSelector } from "react-redux";

const Dashboard = function (props) {
  const currentUser = useSelector((state) => state.authReducer);

  useEffect(()=>{
    
  })

  return (
    <div className="dashboard">
      <h1>welcome {currentUser.username}</h1>
      <section className="mainDisplayed">
        <Mainview />
        </section>
        <section className="otherDisplayed">
        <Otherview />
      </section>
    </div>
  );
};

export default Dashboard;
