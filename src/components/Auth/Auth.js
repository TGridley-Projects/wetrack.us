import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "../../redux/Reducers/AuthReducer";
import "./Auth.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profile_pic: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        this.props.addUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Incorrect Username or Password");
      });
    console.log(this.props);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="loginPage">
        <section className="loginBox">
          <h1>Please login.</h1>
          <h3>If you don't already have an account please register.</h3>
          <p>Username:</p>
          <input
            onChange={(e) => this.changeHandler(e)}
            name="username"
            type="text"
            value={username}
          />
          <p>Password:</p>
          <input
            onChange={(e) => this.changeHandler(e)}
            name="password"
            type="text"
            value={password}
          />
        </section>
        <section className="authButtons">
          <button onClick={this.login}>Login</button>
          <button onClick={(e) => {this.props.history.push('/register')}}>Register</button>
        </section>
      </div>
    );
  }
}

export default connect(null, { addUser })(Auth);
