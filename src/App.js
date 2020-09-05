import React, { useEffect } from "react";
import Axios from 'axios';
import "./App.css";
import routes from "./routes";
import Header from "./components/Header/Header";
import { withRouter } from "react-router";


function App(props) {
  
  return (
    <div className="App">
      {props.history.location.pathname !== "/" &&
      props.history.location.pathname !== "/register" ? (
        <Header />
      ) : null}
      {routes}
    </div>
  );
}

export default withRouter(App);
